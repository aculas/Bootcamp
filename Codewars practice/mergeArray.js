function mergeArrays(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}
