const exec = require("@actions/exec");
const io = require("@actions/io");
const github = require("@actions/github");
const path = require("path");
const glob = require("glob");
const fs = require("fs");

function startBlock(text) {
  console.log(`=== ${text} ===`);
}

function startStep(text) {
  console.log(`› ${text}`);
}

function endBlock() {
  console.log("");
}

function endStep() {
  console.log("");
}

function startAndEndStep(text) {}

async function execResultAsString(commandLine, args, options = {}) {
  let result = "";
  await exec.exec(commandLine, args, {
    ...options,
    listeners: {
      stdout: (data) => {
        result = data.toString();
      },
    },
  });

  return result;
}

function gitTagMessage(packageName, packageVersion) {
  return `${packageName}_v${packageVersion}\n\nAutomated release of v${packageVersion} for ${packageName}.`;
}

function gitTagExists(remoteTags, tag) {
  const regex = new RegExp(`${tag}$`);
  const result = regex.exec(remoteTags);

  return result != null && result.length !== 0;
}

async function publish(
  gitPath,
  npmPath,
  directory,
  packageJson,
  remoteTags,
  isDryRun = false
) {
  const githubClient = new github.GitHub(process.env.GITHUB_TOKEN);
  const gitRemoteUrl = await execResultAsString(
    gitPath,
    ["config", "--get", "remote.origin.url"],
    { silent: true }
  );
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
      startStep(`Publishing ${packageJson.name}@${packageJson.version}`);
      // await exec.exec(npmPath, ["publish", directory]);
      endStep();

      startStep(`Tagging ${packageJson.name}@${packageJson.version}`);
      // fs.writeFileSync("temp.txt", tagMessage);
      // await exec.exec(gitPath, ["tag", "-a", gitTagName, "-F", "./temp.txt"]);

      const tag = await githubClient.git.createTag({
        tag: gitTagName,
        message: tagMessage,
        object: github.context.sha,
        type: "commit",
      });

      // fs.unlinkSync("temp.txt");
      endStep();

      startStep(`Pushing tag ${gitTagName} to upstream`);
      // await exec.exec(gitPath, ["push", gitRemoteUrl, gitTagName]);

      await githubClient.git.createRef({
        ref: `refs/tags/${gitTagName}`,
        sha: tag.data.sha,
      });
      endStep();
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

exports.publishEach = async function publishEach(npmRegistry, npmAuth, isDryRun = false) {
  const workspace = process.env.GITHUB_WORKSPACE;
  const gitPath = await io.which("git", true);
  const npmPath = await io.which("npm", true);

  await exec.exec(npmPath, [
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
  const lernaJson = require(path.resolve(workspace, "lerna.json"));
  const packageDirectories = await lernaJson.packages.reduce(
    async (directories, p) => {
      if (p.includes("*")) {
        const expanded = await new Promise((resolve, reject) =>
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
    const packageJsonContent = fs.readFileSync(`${directory}/package.json`);
    const packageJson = JSON.parse(packageJsonContent);

    startBlock(`${packageJson.name}@${packageJson.version}`);

    if (isPublishable(npmPath, packageJson.name, packageJson.version)) {
      await publish(gitPath, npmPath, directory, packageJson, remoteTags, isDryRun);
    } else {
      console.log(
        `Skipping, ${packageJson.name}@${packageJson.version} has been published.`
      );
    }

    endBlock();
  });
};
