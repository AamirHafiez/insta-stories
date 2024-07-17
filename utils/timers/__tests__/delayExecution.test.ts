import delayExecution from "../delayExecution";

describe("delayExecution", () => {
  jest.useFakeTimers();

  it("should resolve after the specified delay", async () => {
    const delay = 1000;
    const promise = delayExecution(delay);

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(delay);

    await expect(promise).resolves.toBeUndefined();
  });

  it("should not resolve before the specified delay", async () => {
    const delay = 1000;
    const promise = delayExecution(delay);

    // Advance time by less than the delay to ensure promise doesn't resolve yet
    jest.advanceTimersByTime(delay - 1);

    // Check that the promise is still pending
    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    // Expect that the promise hasn't resolved yet
    expect(resolved).toBe(false);

    // Now advance the timer to complete the delay
    jest.advanceTimersByTime(1);

    // Expect the promise to resolve after full delay
    await expect(promise).resolves.toBeUndefined();
  });
});
