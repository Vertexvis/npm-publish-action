jest.mock("@actions/core");
jest.mock("@actions/io");
jest.mock("../env");
jest.mock("../github");
jest.mock("../npm");

import { getInput } from "@actions/core";
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
  "../../test-projects/single-package"
);

const missingNpmAuthTokenInput = "Missing NPM AUTH TOKEN input";
const missingWorkspaceEnvVar = "Missing GITHUB_WORKSPACE env var";
const missingGithubTokenEnvVar = "Missing GITHUB_TOKEN env var";

describe("single project", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should publish and tag project", async () => {
    mockInput(npmAuth, npmRegistry, undefined);
    mockWhich(npmPath);
    mockEnvVars(workspacePath, githubToken);

    (versionExists as jest.Mock).mockResolvedValue(false);
    (tagExists as jest.Mock).mockResolvedValue(false);

    await run();

    expect(configure).toHaveBeenCalledWith(npmPath, npmRegistry, npmAuth);

    expect(publish).toHaveBeenCalledWith(npmPath, workspacePath);
    expect(createTagAndRef).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      "v0.0.1",
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
