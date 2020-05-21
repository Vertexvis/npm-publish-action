const core = require("@actions/core");
const exec = require("@actions/exec");
const io = require("@actions/io");

async function run() {
  const npmAuth = core.getInput('npm-auth-token');
  const npmRegistry = core.getInput('npm-registry');

  const gitPath = await io.which('git', true);
  const npmPath = await io.which('npm', true);

  await exec.exec('ls -l');
  await exec.exec('./npm-publish-action/configure_env.sh', [npmPath, npmRegistry, npmAuth]);
  await exec.exec('./npm-publish-action/publish.sh', [gitPath, npmPath]);
}

run();
