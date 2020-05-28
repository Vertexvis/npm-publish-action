import { logger } from "../utils/logger";
import {
  map as mapPackages,
  getPaths as getPackagePaths,
  PackageInfo,
} from "../packages/packages";
import * as npm from "./npm";

interface PublishingClientProps {
  npmPath: string;
  npmRegistry: string;
  npmAuth: string;
  configFilePath: string;
  isDryRun?: boolean;
}

export class PublishingClient {
  private npmPath: string;
  private npmRegistry: string;
  private npmAuth: string;
  private configFilePath: string;
  private isDryRun?: boolean;
  private githubWorkspace: string;

  constructor({
    npmPath,
    npmRegistry,
    npmAuth,
    configFilePath,
    isDryRun,
  }: PublishingClientProps) {
    this.npmPath = npmPath;
    this.npmRegistry = npmRegistry;
    this.npmAuth = npmAuth;
    this.configFilePath = configFilePath;
    this.isDryRun = isDryRun;

    if (process.env.GITHUB_WORKSPACE != null) {
      this.githubWorkspace = process.env.GITHUB_WORKSPACE;
    } else {
      throw new Error(
        `Unable to resolve a GITHUB_WORKSPACE environment variable, skipping publish.`
      );
    }
  }

  public async publishEach(): Promise<void> {
    await npm.configure(this.npmPath, this.npmRegistry, this.npmAuth);

    await mapPackages(
      getPackagePaths(this.githubWorkspace, this.configFilePath),
      async (packageInfo: PackageInfo) => {
        logger.startBlock(`${packageInfo.name}@${packageInfo.version}`);

        if (this.isPublishable(packageInfo.name, packageInfo.version)) {
          await this.publish(packageInfo);
        } else {
          logger.log(
            `Skipping, ${packageInfo.name}@${packageInfo.version} has been published.`
          );
        }

        logger.endBlock();
      }
    );
  }

  private async isPublishable(name: string, version: string): Promise<boolean> {
    return await npm.versionExists(this.npmPath, name, version);
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
}
