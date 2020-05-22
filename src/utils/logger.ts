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

export default {
  log: console.log,
  error: console.error,
  startBlock,
  startStep,
  endBlock,
  endStep,
};
