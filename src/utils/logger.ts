type ConsoleFunction = (message?: any, ...optionalParams: any[]) => void;

interface Logger {
  log: ConsoleFunction;
  error: ConsoleFunction;
  startBlock: (text: string) => void;
  startStep: (text: string) => void;
  endBlock: VoidFunction;
  endStep: VoidFunction;
}

function startBlock(text: string): void {
  console.log(`=== ${text} ===`);
}

function startStep(text: string): void {
  console.log(`› ${text}`);
}

function endBlock(): void {
  console.log("");
}

function endStep(): void {
  console.log("");
}

export const logger: Logger = {
  log: console.log,
  error: console.error,
  startBlock,
  startStep,
  endBlock,
  endStep,
};
