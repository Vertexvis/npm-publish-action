import { logger } from "../logger";

const log = jest.fn();

describe("logger", () => {
  let initialConsole: Console;

  beforeAll(() => {
    initialConsole = console;

    console = {
      ...console,
      log,
    };
  });

  beforeEach(() => {
    log.mockReset();
  });

  afterAll(() => {
    console = initialConsole;
  });

  it("properly logs start/end blocks", () => {
    logger.startBlock("test");
    logger.startStep("test");
    logger.endBlock();
    logger.endStep();

    expect(log).toHaveBeenNthCalledWith(1, `=== test ===`);
    expect(log).toHaveBeenNthCalledWith(2, `› test`);
    expect(log).toHaveBeenNthCalledWith(3, "");
    expect(log).toHaveBeenNthCalledWith(4, "");
  });
});
