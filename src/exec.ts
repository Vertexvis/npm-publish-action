import * as actionsExec from "@actions/exec";

export type ExecFunction<T> = (
  commandLine: string,
  args?: string[],
  options?: actionsExec.ExecOptions
) => Promise<T>;

export function configureExec(
  exec: ExecFunction<number>
): ExecFunction<string> {
  return async (
    commandLine: string,
    args?: string[],
    options: actionsExec.ExecOptions = {}
  ): Promise<string> => {
    try {
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
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
}

export const exec = actionsExec.exec;

export const execResultAsString = configureExec(actionsExec.exec);
