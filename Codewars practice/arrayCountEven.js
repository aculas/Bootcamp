// take an array and return the even number of elements in the array
function countEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
    return arr;
  }
}

countEven([1, 2, 3, 4, 5, 6]);
