export function getEnvVar(name: string, required: true): string;

export function getEnvVar(name: string, required: false): string | undefined;

export function getEnvVar(
  name: string,
  required?: boolean
): string | undefined {
  const value = process.env[name];
  if (required && value == null) {
    throw new Error(`Environment variable '${name}' is not defined`);
  }
  return value;
}
