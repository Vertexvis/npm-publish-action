import { context, getOctokit } from "@actions/github";

import { isErrorWithStatus } from "./http";

// v9 removed the GitHub class and the lib/context export. REST calls live on octokit.rest.
export type GitHubClient = ReturnType<typeof getOctokit>;
export type GitHubContext = typeof context;

export async function tagExists(
  github: GitHubClient,
  context: GitHubContext,
  tag: string
): Promise<boolean> {
  return handleNotFound(
    async () => {
      const resp = await github.rest.git.getRef({
        ...context.repo,
        ref: `tags/${tag}`,
      });
      return resp.status < 400;
    },
    () => false
  );
}

export async function createTagAndRef(
  github: GitHubClient,
  context: GitHubContext,
  tag: string,
  message: string
): Promise<void> {
  const tagResponse = await github.rest.git.createTag({
    ...context.repo,
    tag,
    message,
    object: context.sha,
    type: "commit",
  });

  await github.rest.git.createRef({
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
    return await execute();
  } catch (e) {
    if (isErrorWithStatus(e) && e.status === 404) {
      return notFound();
    } else {
      throw e;
    }
  }
}
