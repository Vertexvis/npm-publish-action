import { GitHub, context } from "@actions/github";

export function gitTagMessage(packageName: string, packageVersion: string): string {
  return `${packageName}_v${packageVersion}\n\nAutomated release of v${packageVersion} for ${packageName}.`;
}

export function gitTagExists(remoteTags: string, tag: string): boolean {
  const regex = new RegExp(`${tag}$`);
  const result = regex.exec(remoteTags);

  return result != null && result.length !== 0;
}

export async function createTagAndRef(
  client: GitHub,
  tag: string,
  message: string,
  gitContext = context
): Promise<void> {
  const tagResponse = await client.git.createTag({
    ...gitContext.repo,
    tag,
    message,
    object: gitContext.sha,
    type: "commit",
  });

  await client.git.createRef({
    ...gitContext.repo,
    ref: `refs/tags/${tag}`,
    sha: tagResponse.data.sha,
  });
}
