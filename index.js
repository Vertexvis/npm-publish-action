const core = require("@actions/core");
const publish = require('./publish');

async function run() {
  const contextToken = process.env.GITHUB_TOKEN;
  const githubToken = core.getInput('github-token');
  const npmAuth = core.getInput('npm-auth-token');
  const npmRegistry = core.getInput('npm-registry');

  await core.exportVariable("GITHUB_TOKEN", githubToken);

  await publish.publishEach(npmRegistry, npmAuth);

  await core.exportVariable("GITHUB_TOKEN", contextToken);
}

run();
