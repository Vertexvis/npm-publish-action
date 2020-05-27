import fs from "fs";
import glob from "glob";
import path from "path";

type PackageInfoMapper = (
  packageInfo: PackageInfo
) => Promise<void> | void;

export interface PackageInfo {
  name: string;
  version: string;
  path: string;
}

export async function getPaths(
  workspacePath: string,
  configFilePath: string
): Promise<string[]> {
  const configJson = require(path.resolve(workspacePath, configFilePath));
  return await configJson.packages.reduce(
    async (directories: string[], p: string) => {
      if (p.includes("*")) {
        const expanded = await new Promise<string[]>((resolve, reject) =>
          glob(p, (error, matches) =>
            error != null ? reject(error) : resolve(matches)
          )
        );
        return [
          ...directories,
          ...expanded.map((d) => path.resolve(workspacePath, d)),
        ];
      } else return [...directories, path.resolve(workspacePath, p)];
    },
    []
  );
}

export async function map(
  packagePaths: string[],
  f: PackageInfoMapper
): Promise<void> {
  await Promise.all(
    packagePaths.map(async (packagePath: string) => {
      const packageJsonContent = fs.readFileSync(
        `${packagePath}/package.json`,
        {
          encoding: "utf-8",
        }
      );
      const packageJson = JSON.parse(packageJsonContent);

      await f({
        name: packageJson.name,
        version: packageJson.version,
        path: packagePath
      });
    })
  );
}
