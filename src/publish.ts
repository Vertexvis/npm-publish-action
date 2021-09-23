import { logger } from "./logger";
import { PackageInfo } from "./project";
import * as npm from "./npm";
import * as github from "./github";
import { context, GitHub } from "@actions/github";
import { Context } from "@actions/github/lib/context";

interface PublishingClientProps {
  npmPath: string;
  githubToken: string;
  isDryRun?: boolean;
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
    for (const packageInfo of packages) {
      await this.publishAndTag(packageInfo);
    }
  }

  public async publishAndTag(packageInfo: PackageInfo): Promise<void> {
    logger.startBlock(`${packageInfo.name}@${packageInfo.version}`);

    if (packageInfo.isPrivate) {
      logger.log(
        `Skipping, ${packageInfo.name}@${packageInfo.version} is private.`
      );
      return;
    }

    if (await this.isPublished(packageInfo)) {
      logger.log(
        `Skipping publish, ${packageInfo.name}@${packageInfo.version} is already published.`
      );
    } else {
      await this.publish(packageInfo);
    }

    if (await this.isTagged(packageInfo)) {
      logger.log(
        `Skipping tagging, ${packageInfo.name}@${packageInfo.version} is already tagged.`
      );
    } else {
      await this.tag(packageInfo);
    }

    logger.endBlock();
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
}
