import "regenerator-runtime";
import { getInput } from "@actions/core";
import { publishEach } from "./publish";

async function run(): Promise<void> {
  const configFilePath = getInput("packages-config-file");
  const npmAuth = getInput("npm-auth-token");
  const npmRegistry = getInput("npm-registry");
  const isDryRun = getInput("dry-run");

  await publishEach(npmRegistry, npmAuth, configFilePath, isDryRun === "true");
}

run();
