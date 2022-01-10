interface ErrorWithStatus extends Error {
  status: number;
}

export function isErrorWithStatus(error: unknown): error is ErrorWithStatus {
  if (error != null) {
    return (error as any).hasOwnProperty("status");
  } else {
    return false;
  }
}
