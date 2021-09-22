import { PublishingClient } from "../publishingClient";
import { exec, execResultAsString } from "../../utils/exec";

jest.mock("../../utils/exec");
jest.mock("../../utils/logger");

const INITIAL_GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const INITIAL_GITHUB_WORKSPACE = process.env.GITHUB_WORKSPACE;

const packages = ["package1", "package2", "package2"];
const githubToken = "githubtoken";
const workspace = "test";
const npmRegistry = "npm.registry";
const npmAuth = "npm.auth";

describe(PublishingClient, () => {
  let publishingClient: PublishingClient;

  beforeEach(() => {
    process.env.GITHUB_TOKEN = githubToken;
    process.env.GITHUB_WORKSPACE = workspace;
    publishingClient = new PublishingClient({
      npmPath: "npm",
      npmRegistry,
      npmAuth,
    });
  });

  afterEach(() => {
    process.env.GITHUB_TOKEN = INITIAL_GITHUB_TOKEN;
    process.env.GITHUB_WORKSPACE = INITIAL_GITHUB_WORKSPACE;
  });

  describe("publishEach", () => {
    it("configures NPM, and attempts to publish each package", async () => {
      await publishingClient.publishEach();

      expect(exec).toHaveBeenCalledWith("npm", [
        "config",
        "set",
        `//${npmRegistry}/:_authToken=${npmAuth}`,
      ]);
      packages.forEach((p) =>
        expect(execResultAsString).toHaveBeenCalledWith(
          "npm",
          ["info", "--json", p, "versions"],
          { silent: true }
        )
      );
    });
  });
});
