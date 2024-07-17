import isLastIndex from "../isLastIndex";

describe("isLastIndex", () => {
  it("should return false for an empty array", () => {
    expect(isLastIndex([], 0)).toBe(false);
  });

  it("should return true if the index is the last index in a non-empty array", () => {
    expect(isLastIndex([1, 2, 3], 2)).toBe(true);
  });

  it("should return false if the index is not the last index", () => {
    expect(isLastIndex([1, 2, 3], 1)).toBe(false);
  });

  it("should return false if the index is greater than the last index", () => {
    expect(isLastIndex([1, 2, 3], 3)).toBe(false);
  });
});
