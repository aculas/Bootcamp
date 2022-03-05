function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      count++;
      //   Swap----------------------
      if (arr[j] > arr[j + 1]) {
        // This sets a temporary variable and swaps the values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

function bubbleSort2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        // This sets a temporary variable and swaps the values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}
