import isFirstIndex from "../isFirstIndex";

describe("isFirstIndex", () => {
  it("should return false for an empty array", () => {
    expect(isFirstIndex([], 0)).toBe(false);
  });

  it("should return true if the index is 0 and array is non-empty", () => {
    expect(isFirstIndex([1, 2, 3], 0)).toBe(true);
  });

  it("should return false if the index is not 0", () => {
    expect(isFirstIndex([1, 2, 3], 1)).toBe(false);
  });

  it("should return false if the index is 0 but the array is empty", () => {
    expect(isFirstIndex([], 0)).toBe(false);
  });
});
