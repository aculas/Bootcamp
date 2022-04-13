/*
This will write a method that will get an integer array as parameter and will process every number from this array.
then return a new array with processing every number of the input-array like this: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
If the number has an integer square root, take this, otherwise square the number. N * N
*/
function squareOrSquareRoot(array) {
  let processed = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    if (Math.sqrt(number) == Math.floor(Math.sqrt(number))) {
      processed.push(Math.sqrt(number));
    } else {
      processed.push(number * number);
    }
  }
  return processed;
}
