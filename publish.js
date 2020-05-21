const exec = require('@actions/exec');
const io = require('@actions/io');
const lernaJson = require('./lerna.json');
const glob = require('glob');
const fs = require('fs');

function startBlock(text) {
  console.log(`=== ${text} ===`);
}

function startStep(text) {
  console.log(`› ${text}`);
}

function endBlock() {
  console.log('');
}

function endStep() {
  console.log('');
}

function gitTagMessage(packageName, packageVersion) {
  return `${packageName}_v${packageVersion}\n\nAutomated release of v${packageVersion} for ${packageName}.`
}

function gitTagExists(remoteTags, tag) {
  const regex = new RegExp(`${tag}$`);
  const result = regex.exec(remoteTags);

  return result.length !== 0;
}

async function publish(gitPath, npmPath, directory, packageJson, remoteTags) {
  const gitRemoteUrl = await exec.exec(gitPath, ['config', '--get', 'remote.origin.url']);
  const gitTagName = `${packageJson.name}_v${packageJson.version}`;
  const packageDiff = await exec.exec(gitPath, ['diff', 'HEAD~', '--', `${directory}/package.json`]);
  const packageChanged = packageDiff.includes('version:');

  if (gitTagExists(remoteTags, gitTagName)) {
    console.log(`Skipping publish, tag for v${packageJson.version} of ${packageJson.name} already exists.`)
  } else if (packageChanged) {
    console.log(`Skipping publish, ${packageJson.name} version has not changed.`)
  } else {
    const tagMessage = gitTagMessage(packageJson.name, packageJson.version);

    startStep(`Publishing ${packageJson.name}@${packageJson.version}`);
    // await exec.exec(npmPath, ['publish', directory]);
    endStep();

    startStep(`Tagging ${packageJson.name}@${packageJson.version}`)
    fs.writeFileSync('temp.txt', tagMessage);
    await exec.exec(gitPath, ['tag', '-a', gitTagName, '-F', './temp.txt']);
    fs.unlinkSync('temp.txt');
    endStep();

    startStep(`Pushing tag ${gitTagName} to upstream`);
    await exec.exec(gitPath, ['push', gitRemoteUrl, gitTagName]);
    endStep()
  }
}

async function isPublishable(npmPath, packageName, packageVersion) {
  try {
    const versions = await exec.exec(npmPath, ['info', '--json', packageName, 'versions']);
    const parsed = JSON.parse(versions);

    return parsed.find(version => version === packageVersion) == null;
  } catch (e) {
    console.error(e);

    return false;
  }
}

export default async function publishEach(npmRegistry, npmAuth) {
  const gitPath = await io.which('git', true);
  const npmPath = io.which('npm', true);

  await exec.exec(npmPath, ['config', 'set', `//${npmRegistry}/:_authToken=${npmAuth}`]);
  
  const remoteTags = await exec.exec(gitPath, ['ls-remote', '--tags']);
  const packageDirectories = lernaJson.packages.reduce(async (directories, p) => { 
    if (p.includes('*')) { 
      const expanded = await new Promise((resolve) => glob(p, (error, matches) => resolve(matches))); 
      return [...directories, ...expanded];
    }
    else return [...directories, p]; 
  }, []);

  packageDirectories.forEach(async (directory) => {
    const packageJson = require(`${directory}/package.json`);

    startBlock(`${packageJson.name}@${packageJson.version}`);

    if (isPublishable(npmPath, packageJson.name, packageJson.version)) {
      await publish(gitPath, npmPath, directory, packageJson, remoteTags)
    } else {
      console.log(`Skipping, ${packageJson.name}@${packageJson.version} has been published.`);
    }
  })
}