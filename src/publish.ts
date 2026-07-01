import { context, GitHub } from "@actions/github";
import { Context } from "@actions/github/lib/context";

import * as github from "./github";
import { logger } from "./logger";
import * as npm from "./npm";
import { PackageInfo } from "./project";

interface PublishingClientProps {
  npmPath: string;
  githubToken: string;
  isDryRun?: boolean;
}

interface PackageOperationError {
  packageInfo: PackageInfo;
  error: Error;
}

interface PublishResult {
  taggingError?: PackageOperationError;
}

export class PublishingClient {
  private npmPath: string;
  private isDryRun?: boolean;
  private github: GitHub;
  private githubContext: Context;

  public constructor({
    npmPath,
    githubToken,
    isDryRun,
  }: PublishingClientProps) {
    this.npmPath = npmPath;
    this.isDryRun = isDryRun;
    this.github = new GitHub(githubToken);
    this.githubContext = context;
  }

  public async publishAll(packages: PackageInfo[]): Promise<void> {
    const taggingErrors: PackageOperationError[] = [];

    for (const packageInfo of packages) {
      const result = await this.publishAndTag(packageInfo);
      if (result.taggingError != null) {
        taggingErrors.push(result.taggingError);
      }
    }

    if (taggingErrors.length > 0) {
      throw new Error(this.taggingFailureMessage(taggingErrors));
    }
  }

  public async publishAndTag(packageInfo: PackageInfo): Promise<PublishResult> {
    logger.startBlock(`${packageInfo.name}@${packageInfo.version}`);

    try {
      if (packageInfo.isPrivate) {
        logger.log(
          `Skipping, ${packageInfo.name}@${packageInfo.version} is private.`
        );
        return {};
      }

      if (await this.isPublished(packageInfo)) {
        logger.log(
          `Skipping publish, ${packageInfo.name}@${packageInfo.version} is already published.`
        );
      } else {
        await this.publish(packageInfo);
      }

      try {
        if (await this.isTagged(packageInfo)) {
          logger.log(
            `Skipping tagging, ${packageInfo.name}@${packageInfo.version} is already tagged.`
          );
        } else {
          await this.tag(packageInfo);
        }
      } catch (e) {
        const error = this.asError(e);
        logger.error(
          `Failed to tag ${packageInfo.name}@${packageInfo.version}. Continuing with remaining packages. ${error.message}`
        );
        return { taggingError: { packageInfo, error } };
      }

      return {};
    } finally {
      logger.endBlock();
    }
  }

  private isPublished({ name, version }: PackageInfo): Promise<boolean> {
    return npm.versionExists(this.npmPath, name, version);
  }

  private isTagged({ tag }: PackageInfo): Promise<boolean> {
    return github.tagExists(this.github, this.githubContext, tag);
  }

  private async publish(packageInfo: PackageInfo): Promise<void> {
    if (!this.isDryRun) {
      logger.startStep(`Publishing ${packageInfo.name}@${packageInfo.version}`);
      await npm.publish(this.npmPath, packageInfo.path);
      logger.endStep();
    } else {
      logger.log(
        `Dry-run is enabled, skipping publish. Would publish: ${packageInfo.name} at version ${packageInfo.version}`
      );
    }
  }

  private async tag(packageInfo: PackageInfo): Promise<void> {
    if (!this.isDryRun) {
      logger.startStep(`Creating Github tag and release`);
      await github.createTagAndRef(
        this.github,
        this.githubContext,
        packageInfo.tag,
        this.tagMessage(packageInfo)
      );
      logger.endStep();
    } else {
      logger.log(
        `Dry-run is enabled, skipping tagging. Would create tag: ${packageInfo.tag}`
      );
    }
  }

  private tagMessage({ name, version, tag }: PackageInfo): string {
    return `${tag}\n\nAutomated release of v${version} for ${name}.`;
  }

  private taggingFailureMessage(errors: PackageOperationError[]): string {
    const formatted = errors
      .map(
        ({ packageInfo, error }) =>
          `- ${packageInfo.name}@${packageInfo.version} (${packageInfo.tag}): ${error.message}`
      )
      .join("\n");

    return [
      "One or more packages could not be tagged after publishing checks completed.",
      "All packages were still processed for publishing before failing the action.",
      "If this is a GitHub token permission issue, grant `contents: write` to the workflow token.",
      formatted,
    ].join("\n");
  }

  private asError(error: unknown): Error {
    return error instanceof Error ? error : new Error(String(error));
  }
}
