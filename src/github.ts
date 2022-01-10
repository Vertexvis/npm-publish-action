import { GitHub } from "@actions/github";
import { Context } from "@actions/github/lib/context";
import { isErrorWithStatus } from "./http";

export async function tagExists(
  github: GitHub,
  context: Context,
  tag: string
): Promise<boolean> {
  return handleNotFound(
    async () => {
      const resp = await github.git.getRef({
        ...context.repo,
        ref: `tags/${tag}`,
      });
      return resp.status < 400;
    },
    () => false
  );
}

export async function createTagAndRef(
  github: GitHub,
  context: Context,
  tag: string,
  message: string
): Promise<void> {
  const tagResponse = await github.git.createTag({
    ...context.repo,
    tag,
    message,
    object: context.sha,
    type: "commit",
  });

  await github.git.createRef({
    ...context.repo,
    ref: `refs/tags/${tag}`,
    sha: tagResponse.data.sha,
  });
}

async function handleNotFound<T>(
  execute: () => Promise<T>,
  notFound: () => T
): Promise<T> {
  try {
    return execute();
  } catch (e) {
    if (isErrorWithStatus(e) && e.status === 404) {
      return notFound();
    } else {
      throw e;
    }
  }
}
