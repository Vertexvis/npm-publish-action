import { GitHub } from "@actions/github";
import { Context } from "@actions/github/lib/context";

export async function tagExists(
  github: GitHub,
  context: Context,
  tag: string
): Promise<boolean> {
  const resp = await github.git.getRef({ ...context.repo, ref: `tags/${tag}` });
  return resp.status < 400;
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
