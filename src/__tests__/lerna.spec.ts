jest.mock("@actions/core");
jest.mock("@actions/io");
jest.mock("../env");
jest.mock("../github");
jest.mock("../npm");

import { getInput, setFailed } from "@actions/core";
import { which } from "@actions/io";
import path from "path";
import { run } from "../runner";
import { getEnvVar } from "../env";
import { configure, publish, versionExists } from "../npm";
import { createTagAndRef, tagExists } from "../github";
import {
  missingGithubTokenEnvVar,
  missingNpmAuthTokenInput,
  missingWorkspaceEnvVar,
  mockEnvVars,
  mockInput,
  mockWhich,
} from "../testing";

const npmAuth = "npm-auth-token";
const npmRegistry = "https://npm.example.com";
const npmPath = "path/to/npm";
const githubToken = "github-token";

const workspacePath = path.resolve(__dirname, "../../test-projects/lerna");
const package1Path = path.join(workspacePath, "packages/package1");
const package2Path = path.join(workspacePath, "packages/package2");
const package3Path = path.join(workspacePath, "packages/package3");
const package4Path = path.join(workspacePath, "packages/package4");

const getInputMock = getInput as jest.Mock;
const whichMock = which as jest.Mock;
const getEnvVarMock = getEnvVar as jest.Mock;

describe("lerna yarn workspace", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fails if npm-auth-token input is not provided", async () => {
    mockInput(getInputMock, undefined, npmRegistry, "true");
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, workspacePath, githubToken);

    await run();
    expect(setFailed).toHaveBeenCalledWith(new Error(missingNpmAuthTokenInput));
  });

  it("fails if GITHUB_WORKSPACE env var is not provided", async () => {
    mockInput(getInputMock, npmAuth, npmRegistry, "true");
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, undefined, githubToken);

    await run();

    expect(setFailed).toHaveBeenCalledWith(new Error(missingWorkspaceEnvVar));
  });

  it("fails if GITHUB_TOKEN env var is not provided", async () => {
    mockInput(getInputMock, npmAuth, npmRegistry, "true");
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, workspacePath, undefined);

    await run();

    expect(setFailed).toHaveBeenCalledWith(new Error(missingGithubTokenEnvVar));
  });

  it("should publish and tag each public project", async () => {
    mockInput(getInputMock, npmAuth, npmRegistry, undefined);
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, workspacePath, githubToken);

    (versionExists as jest.Mock).mockResolvedValue(false);
    (tagExists as jest.Mock).mockResolvedValue(false);

    await run();

    expect(configure).toHaveBeenCalledWith(npmPath, npmRegistry, npmAuth);

    expect(publish).toHaveBeenCalledWith(npmPath, package1Path);
    expect(createTagAndRef).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "package1_v1.0.2",
      expect.anything()
    );

    expect(publish).toHaveBeenCalledWith(npmPath, package2Path);
    expect(createTagAndRef).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "package2_v0.0.51",
      expect.anything()
    );

    expect(publish).toHaveBeenCalledWith(npmPath, package3Path);
    expect(createTagAndRef).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "package3_v0.10.2",
      expect.anything()
    );

    expect(publish).not.toHaveBeenCalledWith(npmPath, package4Path);
    expect(createTagAndRef).not.toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "package4_v0.0.0",
      expect.anything()
    );
  });

  it("should not publish or tag packages that have been published or tagged", async () => {
    mockInput(getInputMock, npmAuth, npmRegistry, undefined);
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, workspacePath, githubToken);

    (versionExists as jest.Mock).mockResolvedValue(true);
    (tagExists as jest.Mock).mockResolvedValue(true);

    await run();

    expect(publish).not.toHaveBeenCalled();
    expect(createTagAndRef).not.toHaveBeenCalled();
  });

  it("should not publish or tag if dry run enabled", async () => {
    mockInput(getInputMock, npmAuth, npmRegistry, "true");
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, workspacePath, githubToken);

    (versionExists as jest.Mock).mockResolvedValue(false);
    (tagExists as jest.Mock).mockResolvedValue(false);

    await run();

    expect(publish).not.toHaveBeenCalled();
    expect(createTagAndRef).not.toHaveBeenCalled();
  });
});
