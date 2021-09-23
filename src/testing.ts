export const missingNpmAuthTokenInput = "Missing NPM AUTH TOKEN input";

export const missingWorkspaceEnvVar = "Missing GITHUB_WORKSPACE env var";

export const missingGithubTokenEnvVar = "Missing GITHUB_TOKEN env var";

export function mockInput(
  getInput: jest.Mock,
  npmAuth: string | undefined,
  npmRegistry: string | undefined,
  dryRun: string | undefined
): void {
  if (npmAuth != null) {
    getInput.mockReturnValueOnce(npmAuth);
  } else {
    getInput.mockImplementationOnce(() => {
      throw new Error(missingNpmAuthTokenInput);
    });
  }

  getInput.mockReturnValueOnce(npmRegistry);
  getInput.mockReturnValueOnce(dryRun);
}

export function mockWhich(which: jest.Mock, npmPath: string | undefined): void {
  if (npmPath != null) {
    which.mockResolvedValueOnce(npmPath);
  } else {
    which.mockRejectedValueOnce("Missing npm path");
  }
}

export function mockEnvVars(
  getEnvVar: jest.Mock,
  workspacePath: string | undefined,
  githubToken: string | undefined
): void {
  if (workspacePath != null) {
    getEnvVar.mockReturnValueOnce(workspacePath);
  } else {
    getEnvVar.mockImplementationOnce(() => {
      throw new Error(missingWorkspaceEnvVar);
    });
  }

  if (githubToken != null) {
    getEnvVar.mockReturnValueOnce(githubToken);
  } else {
    getEnvVar.mockImplementationOnce(() => {
      throw new Error(missingGithubTokenEnvVar);
    });
  }
}
