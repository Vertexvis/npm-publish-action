import { getInput } from '@actions/core';
import { publishEach } from './publish';

async function run() {
  const npmAuth = getInput("npm-auth-token");
  const npmRegistry = getInput("npm-registry");
  const isDryRun = getInput("dry-run");

  await publishEach(npmRegistry, npmAuth);
}

run();
