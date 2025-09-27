import { merge } from "../src/merge";

describe("merge function", () => {
  it("merges three sorted arrays correctly", () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
  });

  it("handles empty arrays", () => {
    const c1: number[] = [];
    const c2: number[] = [2, 4];
    const c3: number[] = [5, 3, 1];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("works when all arrays empty", () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it("works with negative numbers", () => {
    const c1 = [-10, -5, 0];
    const c2 = [-9, -1, 2];
    const c3 = [5, 3, 1];

    const result = merge(c1, c2, c3);
    expect(result).toEqual(
      [-10, -9, -5, -1, 0, 1, 2, 3, 5]
    );
  });
});
