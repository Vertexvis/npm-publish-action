import { exec } from "@actions/exec";
import { GitHub } from "@actions/github";
import { which } from "@actions/io";
import { logger } from "./utils/logger";
import fs from "fs";
import glob from "glob";
import path from "path";
import { createTagAndRef, gitTagMessage, gitTagExists } from "./utils/git";
import { execResultAsString } from "./utils/exec";

interface PackageJson {
  name: string;
  version: string;
}

async function publish(
  gitPath: string,
  npmPath: string,
  directory: string,
  packageJson: PackageJson,
  remoteTags: string,
  isDryRun: boolean = false
): Promise<void> {
  const githubClient = new GitHub(process.env.GITHUB_TOKEN);
  const gitTagName = `${packageJson.name}_v${packageJson.version}`;
  const packageDiffOutput = await execResultAsString(
    gitPath,
    ["diff", "HEAD~", "--", `${directory}/package.json`],
    { silent: true }
  );
  const packageChanged =
    packageDiffOutput != "" && packageDiffOutput.includes('"version":');

  if (gitTagExists(remoteTags, gitTagName)) {
    console.log(
      `Skipping publish, tag for v${packageJson.version} of ${packageJson.name} already exists.`
    );
  } else if (!packageChanged) {
    console.log(
      `Skipping publish, ${packageJson.name} version has not changed.`
    );
  } else {
    const tagMessage = gitTagMessage(packageJson.name, packageJson.version);

    if (!isDryRun) {
      logger.startStep(`Publishing ${packageJson.name}@${packageJson.version}`);
      await exec(npmPath, ["publish", directory]);
      logger.endStep();

      logger.startStep(
        `Tagging and pushing ${packageJson.name}@${packageJson.version}`
      );
      await createTagAndRef(githubClient, gitTagName, tagMessage);
      logger.endStep();
    } else {
      console.log(`Would publish ${directory}`);
      console.log(`Command: ${npmPath} publish ${directory}`);
    }
  }
}

async function isPublishable(npmPath, packageName, packageVersion) {
  try {
    const versions = await execResultAsString(
      npmPath,
      ["info", "--json", packageName, "versions"],
      { silent: true }
    );
    const parsed = JSON.parse(versions);

    return parsed.find((version) => version === packageVersion) == null;
  } catch (e) {
    return false;
  }
}

export async function publishEach(
  npmRegistry: string,
  npmAuth: string,
  configFilePath: string,
  isDryRun: boolean = false
): Promise<void> {
  const workspace = process.env.GITHUB_WORKSPACE;
  const gitPath = await which("git", true);
  const npmPath = await which("npm", true);

  await exec(npmPath, [
    "config",
    "set",
    `//${npmRegistry}/:_authToken=${npmAuth}`,
  ]);

  const remoteTags = await execResultAsString(
    gitPath,
    ["ls-remote", "--tags"],
    {
      silent: true,
    }
  );
  const configJson = require(path.resolve(workspace, configFilePath));
  const packageDirectories = await configJson.packages.reduce(
    async (directories: string[], p) => {
      if (p.includes("*")) {
        const expanded = await new Promise<string[]>((resolve, reject) =>
          glob(p, (error, matches) =>
            error != null ? reject(error) : resolve(matches)
          )
        );
        return [
          ...directories,
          ...expanded.map((d) => path.resolve(workspace, d)),
        ];
      } else return [...directories, path.resolve(workspace, p)];
    },
    []
  );

  await packageDirectories.forEach(async (directory) => {
    const packageJsonContent = fs.readFileSync(`${directory}/package.json`, {
      encoding: "utf-8",
    });
    const packageJson = JSON.parse(packageJsonContent);

    logger.startBlock(`${packageJson.name}@${packageJson.version}`);

    if (isPublishable(npmPath, packageJson.name, packageJson.version)) {
      await publish(
        gitPath,
        npmPath,
        directory,
        packageJson,
        remoteTags,
        isDryRun
      );
    } else {
      console.log(
        `Skipping, ${packageJson.name}@${packageJson.version} has been published.`
      );
    }

    logger.endBlock();
  });
}
