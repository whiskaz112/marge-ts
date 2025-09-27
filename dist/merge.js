"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
exports.mergeTwo = mergeTwo;
function merge(a, b, c) {
    const array3 = [];
    for (let i = c.length - 1; i >= 0; i--) {
        array3.push(c[i]);
    }
    const mergeFirst = mergeTwo(a, b);
    return mergeTwo(mergeFirst, array3);
}
function mergeTwo(array1, array2) {
    let i = 0, j = 0;
    const result = [];
    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            result.push(array1[i]);
            i++;
        }
        else {
            result.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}
//# sourceMappingURL=merge.js.map