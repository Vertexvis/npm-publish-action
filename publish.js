const exec = require('@actions/exec');
const io = require('@actions/io');
const path = require('path');
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

  return result != null && result.length !== 0;
}

async function publish(gitPath, npmPath, directory, packageJson, remoteTags) {
  const gitRemoteUrl = await exec.exec(gitPath, ['config', '--get', 'remote.origin.url']);
  const gitTagName = `${packageJson.name}_v${packageJson.version}`;
  let packageDiffOutput = '';
  await exec.exec(gitPath, ['diff', 'HEAD~', '--', `${directory}/package.json`], {
    listeners: {
      stdout: (data) => {
        packageDiffOutput = data.toString();
      }
    }
  });
  console.log(packageDiffOutput);
  const packageChanged = packageDiffOutput != '' && packageDiffOutput.includes('"version":');

  if (gitTagExists(remoteTags, gitTagName)) {
    console.log(`Skipping publish, tag for v${packageJson.version} of ${packageJson.name} already exists.`)
  } else if (!packageChanged) {
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
    let versions = '';
    await exec.exec(npmPath, ['info', '--json', packageName, 'versions'], {
      listeners: {
        stdout: (data) => {
          versions = data.toString();
        }
      }
    });
    const parsed = JSON.parse(versions);

    return parsed.find(version => version === packageVersion) == null;
  } catch (e) {
    return false;
  }
}

exports.publishEach = async function publishEach(npmRegistry, npmAuth) {
  const workspace = process.env.GITHUB_WORKSPACE;
  const gitPath = await io.which('git', true);
  const npmPath = await io.which('npm', true);

  await exec.exec(npmPath, ['config', 'set', `//${npmRegistry}/:_authToken=${npmAuth}`]);
  
  const remoteTags = await exec.exec(gitPath, ['ls-remote', '--tags']);
  await exec.exec('echo', [path.resolve(workspace, 'lerna.json')]);
  const lernaJson = require(path.resolve(workspace, 'lerna.json'));
  const packageDirectories = await lernaJson.packages.reduce(async (directories, p) => { 
    if (p.includes('*')) { 
      const expanded = await new Promise((resolve) => glob(p, (error, matches) => resolve(matches))); 
      return [...directories, ...expanded.map(d => path.resolve(workspace, d))];
    }
    else return [...directories, path.resolve(workspace, p)]; 
  }, []);

  await packageDirectories.forEach(async (directory) => {
    const packageJsonContent = fs.readFileSync(`${directory}/package.json`);
    const packageJson = JSON.parse(packageJsonContent);

    startBlock(`${packageJson.name}@${packageJson.version}`);

    if (isPublishable(npmPath, packageJson.name, packageJson.version)) {
      await publish(gitPath, npmPath, directory, packageJson, remoteTags)
    } else {
      console.log(`Skipping, ${packageJson.name}@${packageJson.version} has been published.`);
    }
  })
}
