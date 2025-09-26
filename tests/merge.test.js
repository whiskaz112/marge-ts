"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_js_1 = require("../src/merge.js");
describe("merge function", () => {
    it("merges three sorted arrays correctly", () => {
        const c1 = [1, 3, 5];
        const c2 = [2, 4, 6];
        const c3 = [9, 7];
        const result = (0, merge_js_1.merge)(c1, c2, c3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
    });
    it("handles empty arrays", () => {
        const c1 = [];
        const c2 = [2, 4];
        const c3 = [5, 3, 1];
        const result = (0, merge_js_1.merge)(c1, c2, c3);
        expect(result).toEqual([1, 3, 5, 2, 4].sort((a, b) => a - b));
    });
    it("works when all arrays empty", () => {
        const result = (0, merge_js_1.merge)([], [], []);
        expect(result).toEqual([]);
    });
    it("works with negative numbers", () => {
        const c1 = [-10, -5, 0];
        const c2 = [-9, -1, 2];
        const c3 = [5, 3, 1];
        const result = (0, merge_js_1.merge)(c1, c2, c3);
        expect(result).toEqual([-10, -9, -5, -1, 0, 1, 3, 5, 2].sort((a, b) => a - b));
    });
});
