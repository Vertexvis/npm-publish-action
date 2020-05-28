import fs from "fs";
import glob from "glob";
import path from "path";

type PackageInfoMapper = (packageInfo: PackageInfo) => Promise<void> | void;

export interface PackageInfo {
  name: string;
  version: string;
  path: string;
}

export function getPaths(
  workspacePath: string,
  configFilePath: string
): string[] {
  const configJsonContent = fs.readFileSync(
    path.resolve(workspacePath, configFilePath),
    { encoding: "utf-8" }
  );
  const configJson = JSON.parse(configJsonContent);

  return configJson.packages.reduce((directories: string[], p: string) => {
    if (p.includes("*")) {
      const expanded = glob.sync(path.resolve(workspacePath, p));

      return [
        ...directories,
        ...expanded.map((d) => path.resolve(workspacePath, d)),
      ];
    }

    return [...directories, path.resolve(workspacePath, p)];
  }, []);
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
        path: packagePath,
      });
    })
  );
}
