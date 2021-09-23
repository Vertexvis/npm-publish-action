import { execResultAsString, exec } from "./exec";
import { logger } from "./logger";

export async function configure(
  npmPath: string,
  npmRegistry: string,
  npmAuth: string
): Promise<void> {
  await exec(npmPath, [
    "config",
    "set",
    `//${npmRegistry}/:_authToken=${npmAuth}`,
  ]);
}

export async function versionExists(
  npmPath: string,
  name: string,
  version: string
): Promise<boolean> {
  try {
    const versions = await execResultAsString(
      npmPath,
      ["info", "--json", name, "versions"],
      { silent: true }
    );
    const parsed = JSON.parse(versions);

    return parsed.find((v: string) => v === version) != null;
  } catch (e) {
    logger.error(
      `Failed to check NPM for version ${version} of ${name}. Assuming version does not exist.`
    );
    return false;
  }
}

export async function publish(npmPath: string, path: string): Promise<void> {
  await exec(npmPath, ["publish", path]);
}
