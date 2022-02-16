function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
// A linear search does not need to be sorted to determine the target value. This will increase time complexity.
