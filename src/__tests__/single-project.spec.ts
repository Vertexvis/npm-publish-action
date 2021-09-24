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
import { mockEnvVars, mockInput, mockWhich } from "../testing";

const npmAuth = "npm-auth-token";
const npmRegistry = "https://npm.example.com";
const npmPath = "path/to/npm";
const githubToken = "github-token";

const getInputMock = getInput as jest.Mock;
const whichMock = which as jest.Mock;
const getEnvVarMock = getEnvVar as jest.Mock;

const workspacePath = path.resolve(
  __dirname,
  "../../test-projects/single-package"
);

describe("single project", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should publish and tag project", async () => {
    mockInput(getInputMock, npmAuth, npmRegistry, undefined);
    mockWhich(whichMock, npmPath);
    mockEnvVars(getEnvVarMock, workspacePath, githubToken);

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

    await run();

    expect(publish).not.toHaveBeenCalled();
    expect(createTagAndRef).not.toHaveBeenCalled();
  });
});
