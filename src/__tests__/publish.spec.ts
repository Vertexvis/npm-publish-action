import { publishEach } from "../publish";

const INITIAL_GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const INITIAL_GITHUB_WORKSPACE = process.env.GITHUB_WORKSPACE;

const npmRegistry = "some.npm.registry";
const npmAuth = "npm-auth-token";
const configFilePath = "config.json";

describe(publishEach, () => {
  afterEach(() => {
    process.env.GITHUB_TOKEN = INITIAL_GITHUB_TOKEN;
    process.env.GITHUB_WORKSPACE = INITIAL_GITHUB_WORKSPACE;
  });

  describe("without a GITHUB_WORKSPACE", () => {
    beforeEach(() => {
      process.env.GITHUB_TOKEN = "some-token";
      delete process.env.GITHUB_WORKSPACE;
    });

    it("Skips publish and rejects", async () => {
      await expect(
        publishEach(npmRegistry, npmAuth, configFilePath)
      ).rejects.toThrow(
        `Unable to resolve a GITHUB_WORKSPACE environment variable, skipping publish.`
      );
    });
  });

  describe("without a GITHUB_TOKEN", () => {
    beforeEach(() => {
      delete process.env.GITHUB_TOKEN;
    });

    it("Skips publish and rejects", async () => {
      await expect(
        publishEach(npmRegistry, npmAuth, configFilePath)
      ).rejects.toThrow(
        `Unable to resolve a GITHUB_TOKEN environment variable, skipping publish. Please ensure that a "env" block with a GITHUB_TOKEN was provided.`
      );
    })
  })
});
