import { getPaths, map } from "../packages";

const packagePaths = [
  "packages/package1",
  "packages/package2",
  "packages/package3",
];
const workspacePath = "test";

describe(getPaths, () => {
  it("should read the config file and return a set of paths to packages", () => {
    const result = getPaths(workspacePath, "config.json");

    expect(result).toEqual(
      packagePaths.map((path) =>
        expect.stringContaining(`${workspacePath}/${path}`)
      )
    );
  });

  it("should expand a glob and return resulting packages", () => {
    const result = getPaths(workspacePath, "configGlob.json");

    expect(result).toEqual(
      packagePaths.map((path) =>
        expect.stringContaining(`${workspacePath}/${path}`)
      )
    );
  });
});

describe(map, () => {
  const mapper = jest.fn();
  beforeEach(() => {
    mapper.mockClear();
  });

  it("should read the package.json at each path, and invoke the mapping function information about the package", async () => {
    await map(getPaths(workspacePath, "config.json"), mapper);

    expect(mapper).toHaveBeenCalledTimes(3);
    expect(mapper).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "package1",
      })
    );
    expect(mapper).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "package2",
      })
    );
    expect(mapper).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "package3",
      })
    );
  });
});
