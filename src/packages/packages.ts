import fs from "fs";
import glob from "glob";
import path from "path";

type PackageInfoMapper = (packageInfo: PackageInfo) => Promise<void> | void;

export interface PackageInfo {
  name: string;
  version: string;
  path: string;
}

export function getPaths(workspacePath: string): string[] {
  const packages = getPackages(workspacePath);
  return packages.reduce((directories: string[], p: string) => {
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

function getPackages(workspacePath: string): string[] {
  if (fs.existsSync(path.resolve(workspacePath, "lerna.json"))) {
    return getLernaPackages(workspacePath);
  } else {
    return [workspacePath];
  }
}

function getLernaPackages(workspacePath: string): string[] {
  const lernaConfigPath = path.resolve(workspacePath, "lerna.json");
  const lernaJson = JSON.parse(
    fs.readFileSync(lernaConfigPath, { encoding: "utf-8" })
  );

  if (lernaJson.useWorkspaces === true) {
    const packageJsonPath = path.resolve(workspacePath, "package.json");
    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, { encoding: "utf-8" })
    );
    return packageJson.workspaces;
  } else {
    return lernaJson.packages;
  }
}

export async function map(
  packagePaths: string[],
  f: PackageInfoMapper
): Promise<void> {
  await Promise.all(
    packagePaths.map(async (packagePath: string) => {
      const packageJsonContent = fs.readFileSync(
        `${packagePath}/package.json`,
        { encoding: "utf-8" }
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
