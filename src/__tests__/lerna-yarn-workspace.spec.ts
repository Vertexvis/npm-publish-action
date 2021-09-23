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

const npmAuth = "npm-auth-token";
const npmRegistry = "https://npm.example.com";
const npmPath = "path/to/npm";
const githubToken = "github-token";

const workspacePath = path.resolve(
  __dirname,
  "../../test-projects/lerna-yarn-workspace"
);
const package1Path = path.join(workspacePath, "packages/package1");
const package2Path = path.join(workspacePath, "packages/package2");
const package3Path = path.join(workspacePath, "packages/package3");
const package4Path = path.join(workspacePath, "packages/package4");

const missingNpmAuthTokenInput = "Missing NPM AUTH TOKEN input";
const missingWorkspaceEnvVar = "Missing GITHUB_WORKSPACE env var";
const missingGithubTokenEnvVar = "Missing GITHUB_TOKEN env var";

describe("lerna yarn workspace", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fails if npm-auth-token input is not provided", async () => {
    mockInput(undefined, npmRegistry, "true");
    mockWhich(npmPath);
    mockEnvVars(workspacePath, githubToken);

    await run();
    expect(setFailed).toHaveBeenCalledWith(new Error(missingNpmAuthTokenInput));
  });

  it("fails if GITHUB_WORKSPACE env var is not provided", async () => {
    mockInput(npmAuth, npmRegistry, "true");
    mockWhich(npmPath);
    mockEnvVars(undefined, githubToken);

    await run();

    expect(setFailed).toHaveBeenCalledWith(new Error(missingWorkspaceEnvVar));
  });

  it("fails if GITHUB_TOKEN env var is not provided", async () => {
    mockInput(npmAuth, npmRegistry, "true");
    mockWhich(npmPath);
    mockEnvVars(workspacePath, undefined);

    await run();

    expect(setFailed).toHaveBeenCalledWith(new Error(missingGithubTokenEnvVar));
  });

  it("should publish and tag each public project", async () => {
    mockInput(npmAuth, npmRegistry, undefined);
    mockWhich(npmPath);
    mockEnvVars(workspacePath, githubToken);

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
    mockInput(npmAuth, npmRegistry, undefined);
    mockWhich(npmPath);
    mockEnvVars(workspacePath, githubToken);

    (versionExists as jest.Mock).mockResolvedValue(true);
    (tagExists as jest.Mock).mockResolvedValue(true);

    await run();

    expect(publish).not.toHaveBeenCalled();
    expect(createTagAndRef).not.toHaveBeenCalled();
  });

  it("should not publish or tag if dry run enabled", async () => {
    mockInput(npmAuth, npmRegistry, "true");
    mockWhich(npmPath);
    mockEnvVars(workspacePath, githubToken);

    (versionExists as jest.Mock).mockResolvedValue(false);
    (tagExists as jest.Mock).mockResolvedValue(false);

    await run();

    expect(publish).not.toHaveBeenCalled();
    expect(createTagAndRef).not.toHaveBeenCalled();
  });
});

function mockInput(
  npmAuth: string | undefined,
  npmRegistry: string | undefined,
  dryRun: string | undefined
): void {
  const mock = getInput as jest.Mock;

  if (npmAuth != null) {
    mock.mockReturnValueOnce(npmAuth);
  } else {
    mock.mockImplementationOnce(() => {
      throw new Error(missingNpmAuthTokenInput);
    });
  }

  mock.mockReturnValueOnce(npmRegistry);
  mock.mockReturnValueOnce(dryRun);
}

function mockWhich(npmPath: string | undefined): void {
  if (npmPath != null) {
    (which as jest.Mock).mockResolvedValueOnce(npmPath);
  } else {
    (which as jest.Mock).mockRejectedValueOnce("Missing npm path");
  }
}

function mockEnvVars(
  workspacePath: string | undefined,
  githubToken: string | undefined
): void {
  const mock = getEnvVar as jest.Mock;

  if (workspacePath != null) {
    mock.mockReturnValueOnce(workspacePath);
  } else {
    mock.mockImplementationOnce(() => {
      throw new Error(missingWorkspaceEnvVar);
    });
  }

  if (githubToken != null) {
    mock.mockReturnValueOnce(githubToken);
  } else {
    mock.mockImplementationOnce(() => {
      throw new Error(missingGithubTokenEnvVar);
    });
  }
}
