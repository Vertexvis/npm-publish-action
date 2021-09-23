import path from "path";
import { getProject } from "../project";

const singleProjectPath = path.resolve(
  __dirname,
  "../../test-projects/single-package"
);
const lernaWorkspacePath = path.resolve(__dirname, "../../test-projects/lerna");
const lernaYarnWorkspacePath = path.resolve(
  __dirname,
  "../../test-projects/lerna-yarn-workspace"
);

describe(getProject, () => {
  describe("single project", () => {
    it("should read the config file and return packages", () => {
      const project = getProject(singleProjectPath);

      expect(project).toMatchObject({
        type: "single",
        packages: [
          expect.objectContaining({
            name: "single-package",
            version: "0.0.1",
            isPrivate: false,
            path: singleProjectPath,
          }),
        ],
      });
    });
  });

  describe("lerna", () => {
    it("should read the lerna.json and return packages", () => {
      const project = getProject(lernaWorkspacePath);

      expect(project).toMatchObject({
        type: "monorepo",
        packages: [
          expect.objectContaining({
            name: "package1",
            version: "1.0.2",
            isPrivate: false,
            path: path.join(lernaWorkspacePath, "packages/package1"),
          }),
          expect.objectContaining({
            name: "package2",
            version: "0.0.51",
            isPrivate: false,
            path: path.join(lernaWorkspacePath, "packages/package2"),
          }),
          expect.objectContaining({
            name: "package3",
            version: "0.10.2",
            isPrivate: false,
            path: path.join(lernaWorkspacePath, "packages/package3"),
          }),
          expect.objectContaining({
            name: "package4",
            version: "0.0.0",
            isPrivate: true,
            path: path.join(lernaWorkspacePath, "packages/package4"),
          }),
        ],
      });
    });
  });

  describe("lerna yarn workspace", () => {
    it("should read package.json and return workspaces", () => {
      const project = getProject(lernaYarnWorkspacePath);

      expect(project).toMatchObject({
        type: "monorepo",
        packages: [
          expect.objectContaining({
            name: "package1",
            version: "1.0.2",
            isPrivate: false,
            path: path.join(lernaYarnWorkspacePath, "packages/package1"),
          }),
          expect.objectContaining({
            name: "package2",
            version: "0.0.51",
            isPrivate: false,
            path: path.join(lernaYarnWorkspacePath, "packages/package2"),
          }),
          expect.objectContaining({
            name: "package3",
            version: "0.10.2",
            isPrivate: false,
            path: path.join(lernaYarnWorkspacePath, "packages/package3"),
          }),
          expect.objectContaining({
            name: "package4",
            version: "0.0.0",
            isPrivate: true,
            path: path.join(lernaYarnWorkspacePath, "packages/package4"),
          }),
        ],
      });
    });
  });
});
