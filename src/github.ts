import { GitHub } from "@actions/github";
import { Context } from "@actions/github/lib/context";
import { isErrorWithStatus } from "./http";

export async function tagExists(
  github: GitHub,
  context: Context,
  tag: string
): Promise<boolean> {
  try {
    console.log("Checking if tag exists on github", `tags${tag}`);
    const resp = await github.git.getRef({
      ...context.repo,
      ref: `tags/${tag}`,
    });
    console.log("got response", resp.status);
    return resp.status < 400;
  } catch (e) {
    if (isErrorWithStatus(e)) {
      return false;
    } else {
      throw e;
    }
  }
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
