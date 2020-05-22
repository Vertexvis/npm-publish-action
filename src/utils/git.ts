import { GitHub, context } from "@actions/github";

export function gitTagMessage(packageName, packageVersion) {
  return `${packageName}_v${packageVersion}\n\nAutomated release of v${packageVersion} for ${packageName}.`;
}

export function gitTagExists(remoteTags, tag) {
  const regex = new RegExp(`${tag}$`);
  const result = regex.exec(remoteTags);

  return result != null && result.length !== 0;
}

export async function createTagAndRef(
  client: GitHub,
  tag: string,
  message: string
) {
  const tagResponse = await client.git.createTag({
    ...context.repo,
    tag,
    message,
    object: context.sha,
    type: "commit",
  });

  await client.git.createRef({
    ...context.repo,
    ref: `refs/tags/${tag}`,
    sha: tagResponse.data.sha,
  });
}
