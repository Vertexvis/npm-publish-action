import fs from "fs";
import glob from "glob";
import path from "path";

export interface Project {
  type: "single" | "monorepo";
  packages: PackageInfo[];
}

export interface PackageInfo {
  name: string;
  version: string;
  isPrivate: boolean;
  path: string;
  tag: string;
}

export function getProject(workspacePath: string): Project {
  const lernaPath = path.resolve(workspacePath, "lerna.json");
  const packagePath = path.resolve(workspacePath, "package.json");

  const packageJson = JSON.parse(
    fs.readFileSync(packagePath, { encoding: "utf-8" })
  );

  const isMonoRepo = fs.existsSync(lernaPath);
  const isYarnWorkspace = packageJson.workspaces != null;

  let paths = [];
  if (isYarnWorkspace) {
    paths = packageJson.workspaces;
  } else if (isMonoRepo) {
    const lernaJson = JSON.parse(
      fs.readFileSync(lernaPath, { encoding: "utf-8" })
    );
    paths = lernaJson.packages;
  } else {
    paths = [workspacePath];
  }

  return {
    type: isMonoRepo ? "monorepo" : "single",
    packages: getPackages(isMonoRepo, workspacePath, paths),
  };
}

function getPackages(
  isMonoRepo: boolean,
  workspacePath: string,
  paths: string[]
): PackageInfo[] {
  const resolvedPaths = paths
    .map((p) => {
      if (p.includes("*")) {
        const expanded = glob.sync(path.resolve(workspacePath, p));
        return expanded.map((d) => path.resolve(workspacePath, d));
      } else {
        return p;
      }
    })
    .flat();

  return resolvedPaths.map((p) => {
    const packagePath = path.join(p, "package.json");
    const packageJson = JSON.parse(
      fs.readFileSync(packagePath, { encoding: "utf-8" })
    );

    const name = packageJson.name;
    const version = packageJson.version;
    const isPrivate = packageJson.private || false;
    const tag = isMonoRepo ? `${name}_v${version}` : `v${version}`;

    return { name, version, isPrivate, path: p, tag };
  });
}
