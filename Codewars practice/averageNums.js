// “Write a function that is given a list of numbers.
// Find all the even numbers in the list and return the average of them.”

function avgEvens(nums) {
  let sum = 0;
  let count = 0;

  for (let num of nums) {
    if (num % 2 !== 0) continue;

    sum += num;
    count += 1;
  }

  return sum / count;
}
