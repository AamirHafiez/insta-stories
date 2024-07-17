import "@testing-library/jest-dom";
import isEmpty from "../isEmpty";

describe("isEmpty", () => {
  it("should return true for an empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false for a non-empty array", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("should return true for an array with length 0", () => {
    const arr = new Array(0);
    expect(isEmpty(arr)).toBe(true);
  });
});
