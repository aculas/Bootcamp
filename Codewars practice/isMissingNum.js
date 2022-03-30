// This function takes an array and determines if a number is missing within the array

function isMissingNum(arr) {
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i + 1];
    }
  }
  return arr;
}

// another approach

function getMissingNo(a) {
  let n = a.length;
  // declares two variables
  let i,
    total = 1;
  // starts i at value of 2
  for (i = 2; i <= n + 1; i++) {
    total += i;
    total -= a[i - 2];
  }
  return total;
}

function numArray(arr, num) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
    if (count == 2) {
      return true;
    }
    return false;
  }
}
