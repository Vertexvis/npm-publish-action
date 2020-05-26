import { configureExec } from "../exec";

const exec = jest.fn(async (commandLine, args, options) => {
  if (options.listeners != null && options.listeners.stdout != null) {
    options.listeners.stdout("result");
  }

  return 0;
});
const execResultAsString = configureExec(exec);

describe(execResultAsString, () => {
  beforeEach(() => {
    exec.mockClear();
  });

  it("calls exec with a callback for the stdout string result and returns that result", async () => {
    const result = await execResultAsString("command");

    expect(exec).toHaveBeenCalledWith(
      "command",
      undefined,
      expect.objectContaining({
        listeners: {
          stdout: expect.anything(),
        },
      })
    );
    expect(result).toBe("result");
  });
});
