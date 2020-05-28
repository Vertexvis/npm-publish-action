import { ReleaseClient } from "../releaseClient";
import { exec, execResultAsString } from "../../utils/exec";
import { packages } from "../../../test";
import * as git from "../git";

jest.mock("../../utils/exec");
jest.mock("../../utils/logger");

const INITIAL_GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const INITIAL_GITHUB_WORKSPACE = process.env.GITHUB_WORKSPACE;

const createTag = jest.fn(() => ({
  data: {
    sha: "sha",
  },
}));
const createRef = jest.fn();
const mockGitHubClient: any = {
  git: {
    createTag,
    createRef,
  },
};
const mockContext: any = {};
const githubToken = "githubtoken";
const workspace = "test";
const configFilePath = "config.json";

describe(ReleaseClient, () => {
  let releaseClient: ReleaseClient;

  beforeEach(() => {
    process.env.GITHUB_TOKEN = githubToken;
    process.env.GITHUB_WORKSPACE = workspace;
    createTag.mockClear();
    createRef.mockClear();
    releaseClient = new ReleaseClient({
      gitPath: "git",
      configFilePath,
    });
    releaseClient.setGithubClientAndContext(mockGitHubClient, mockContext);
  });

  afterEach(() => {
    process.env.GITHUB_TOKEN = INITIAL_GITHUB_TOKEN;
    process.env.GITHUB_WORKSPACE = INITIAL_GITHUB_WORKSPACE;
  });

  describe("releaseEach", () => {
    it("fetches remote tags and creates/pushes versions that do not exist", async () => {
      await releaseClient.releaseEach();

      const package1 = packages[0];
      const package3 = packages[2];

      const packageTag1 = git.createTagName(package1.name, package1.version);
      const packageTag3 = git.createTagName(package3.name, package3.version);

      expect(execResultAsString).toHaveBeenCalledWith(
        "git",
        ["ls-remote", "--tags"],
        { silent: true }
      );

      expect(createTag).toHaveBeenCalledWith(
        expect.objectContaining({
          tag: packageTag1,
          message: git.createMessage(package1.name, package1.version),
          type: "commit",
        })
      );
      expect(createRef).toHaveBeenCalledWith(
        expect.objectContaining({
          ref: `refs/tags/${packageTag1}`,
          sha: "sha",
        })
      );
      expect(createTag).toHaveBeenCalledWith(
        expect.objectContaining({
          tag: packageTag3,
          message: git.createMessage(package3.name, package3.version),
          type: "commit",
        })
      );
      expect(createRef).toHaveBeenCalledWith(
        expect.objectContaining({
          ref: `refs/tags/${packageTag3}`,
          sha: "sha",
        })
      );
    });
  });
});
