const execResultAsStringFn = jest.fn(async (command, args, options) => {
  // Return fake tags
  if (command === "git" && args.find((a: string) => a === "ls-remote")) {
    return ["package2_v0.0.51"];
  }
});

export const exec = jest.fn();
export const execResultAsString = execResultAsStringFn;
