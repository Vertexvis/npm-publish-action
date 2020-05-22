const core = require("@actions/core");
const publish = require('./publish');

async function run() {
  const npmAuth = core.getInput('npm-auth-token');
  const npmRegistry = core.getInput('npm-registry');
  const isDryRun = core.getInput("dry-run")

  await publish.publishEach(npmRegistry, npmAuth);
}

run();
