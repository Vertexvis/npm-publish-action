import { getInput, setFailed } from "@actions/core";
import { which } from "@actions/io";
import { getProject } from "./project";
import { PublishingClient } from "./publish";
import * as npm from "./npm";
import { getEnvVar } from "./env";

interface ConfigureParams {
  npmPath: string;
  npmAuth: string;
  npmRegistry: string;
}

export async function run(): Promise<void> {
  try {
    const npmAuth = getInput("npm-auth-token", { required: true });
    const npmRegistry = getInput("npm-registry");
    const isDryRun = getInput("dry-run") === "true";

    const npmPath = await which("npm", true);

    const workspacePath = getEnvVar("GITHUB_WORKSPACE", true);
    const githubToken = getEnvVar("GITHUB_TOKEN", true);

    const publisher = new PublishingClient({ npmPath, githubToken, isDryRun });

    await configure({ npmPath, npmRegistry, npmAuth });
    await publish(workspacePath, publisher);
  } catch (e) {
    setFailed(e);
  }
}

async function configure({
  npmPath,
  npmRegistry,
  npmAuth,
}: ConfigureParams): Promise<void> {
  await npm.configure(npmPath, npmRegistry, npmAuth);
}

async function publish(
  workspacePath: string,
  publisher: PublishingClient
): Promise<void> {
  const { packages } = getProject(workspacePath);
  await publisher.publishAll(packages);
}
