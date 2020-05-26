import { createTagAndRef, gitTagExists } from "../git";

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

describe(gitTagExists, () => {
  describe("with no existing tag", () => {
    it("returns false", () => {
      expect(gitTagExists("fake-tag", "real-tag")).toBeFalsy();
    });
  });

  describe("with an existing tag", () => {
    it("returns true", () => {
      expect(gitTagExists("real-tag", "real-tag")).toBeTruthy();
    });
  });
});

describe(createTagAndRef, () => {
  beforeEach(() => {
    createTag.mockClear();
    createRef.mockClear();
  });

  it("creates the specified tag, and uses the response to create a corresponding ref", async () => {
    await createTagAndRef(
      mockGitHubClient,
      "test-tag",
      "test-tag message",
      mockContext
    );

    expect(createTag).toHaveBeenCalledWith(
      expect.objectContaining({
        tag: "test-tag",
        message: "test-tag message",
        type: "commit",
      })
    );

    expect(createRef).toHaveBeenCalledWith(
      expect.objectContaining({
        ref: "refs/tags/test-tag",
        sha: "sha",
      })
    );
  });
});
