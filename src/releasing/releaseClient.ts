import {
  PackageInfo,
  map as mapPackages,
  getPaths as getPackagePaths,
} from "../packages/packages";
import * as git from "./git";
import { logger } from "../utils/logger";
import { GitHub } from "@actions/github";

interface ReleaseClientProps {
  gitPath: string;
  configFilePath: string;
  isDryRun?: boolean;
}

export class ReleaseClient {
  private gitPath: string;
  private configFilePath: string;
  private isDryRun?: boolean;
  private githubClient: GitHub;
  private githubToken: string;
  private githubWorkspace: string;
  private remoteTags: string;

  constructor({ gitPath, configFilePath, isDryRun }: ReleaseClientProps) {
    this.gitPath = gitPath;
    this.configFilePath = configFilePath;
    this.isDryRun = isDryRun;
    this.remoteTags = "";

    if (process.env.GITHUB_TOKEN != null) {
      this.githubToken = process.env.GITHUB_TOKEN;
    } else {
      throw new Error(
        `Unable to resolve a GITHUB_TOKEN environment variable, skipping publish. Please ensure that a "env" block with a GITHUB_TOKEN was provided.`
      );
    }

    if (process.env.GITHUB_WORKSPACE != null) {
      this.githubWorkspace = process.env.GITHUB_WORKSPACE;
    } else {
      throw new Error(
        `Unable to resolve a GITHUB_WORKSPACE environment variable, skipping publish.`
      );
    }

    this.githubClient = new GitHub(this.githubToken);
  }

  public async releaseEach(): Promise<void> {
    this.remoteTags = await git.getRemoteTags(this.gitPath);

    await mapPackages(
      await getPackagePaths(this.githubWorkspace, this.configFilePath),
      async (packageInfo: PackageInfo) => {
        logger.startBlock(`${packageInfo.name}@${packageInfo.version}`);

        if (this.isReleasable(packageInfo.name, packageInfo.version)) {
          await this.release(packageInfo.path, packageInfo);
        } else {
          console.log(
            `Skipping, ${packageInfo.name}@${packageInfo.version} has been published.`
          );
        }

        logger.endBlock();
      }
    );
  }

  private async release(path: string, packageInfo: PackageInfo): Promise<void> {
    const tagName = git.createTagName(packageInfo.name, packageInfo.version);
    const tagExists = git.tagExists(this.remoteTags, tagName);

    if (tagExists) {
      console.log(
        `Skipping publish, tag for v${packageInfo.version} of ${packageInfo.name} already exists.`
      );
    } else {
      const tagMessage = git.createMessage(
        packageInfo.name,
        packageInfo.version
      );

      if (!this.isDryRun) {
        logger.startStep(
          `Tagging and pushing ${packageInfo.name}@${packageInfo.version}`
        );
        await git.createTagAndRef(this.githubClient, tagName, tagMessage);
        logger.endStep();
      } else {
        console.log(
          `Dry-run is enabled, skipping release. Would create tag: ${tagName}`
        );
      }
    }
  }

  private isReleasable(name: string, version: string): boolean {
    const tagName = git.createTagName(name, version);

    return git.tagExists(this.remoteTags, tagName);
  }
}
