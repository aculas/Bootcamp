function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// This will return undefined everytime

// Now this function can be used in another function to find the value

function countZeros(arr) {
  // Start off with counter variable
  let total = 0;
  // use the above function
  arr.forEach(function (val) {
    if (val === 0) {
      total++;
    }
  });
  return total;
}

// input ex: countZeros([2,4,6]; //0)
// input ex: countZeros([0,0,1,2,3,1]; //2)
