import { exec, ExecOptions } from "@actions/exec";

export async function execResultAsString(
  commandLine: string,
  args?: string[],
  options: ExecOptions = {}
): Promise<string> {
  let result = "";
  await exec(commandLine, args, {
    ...options,
    listeners: {
      stdout: (data) => {
        result = data.toString();
      },
    },
  });

  return result;
}
