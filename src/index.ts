import "regenerator-runtime";
import { which } from "@actions/io";
import { getInput } from "@actions/core";
import { PublishingClient } from "./publishing/publishingClient";
import { ReleaseClient } from "./releasing/releaseClient";

async function run(): Promise<void> {
  const npmAuth = getInput("npm-auth-token");
  const npmRegistry = getInput("npm-registry");
  const isDryRun = getInput("dry-run");

  const npmPath = await which("npm", true);
  const gitPath = await which("git", true);

  const releaseClient = new ReleaseClient({
    gitPath,
    isDryRun: isDryRun === "true",
  });
  const publishingClient = new PublishingClient({
    npmPath,
    npmRegistry,
    npmAuth,
    isDryRun: isDryRun === "true",
  });

  await releaseClient.releaseEach();
  await publishingClient.publishEach();
}

run();
