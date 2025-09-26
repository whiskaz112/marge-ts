export function merge(a: number[], b: number[], c: number[]): number[] {
  const array3: number[] = [];

  for (let i = c.length - 1; i >= 0; i--) {
    array3.push(c[i]!);
  }

  const mergeFirst = mergeTwo(a, b);
  return mergeTwo(mergeFirst, array3);
}

export function mergeTwo(array1: number[], array2: number[]): number[] {
  let i = 0,
    j = 0;
  const result: number[] = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i]! <= array2[j]!) {
      result.push(array1[i]!);
      i++;
    } else {
      result.push(array2[j]!);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]!);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]!);
    j++;
  }

  return result;
}
