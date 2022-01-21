// This function uses starter values that holds a temp count and max count.
function longestFall(nums) {
  let counter = 1;
  let maxCounter = 0;

  // Check to see if an array is empty

  if (nums.length === 0) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    // if current number is smaller than previous number

    if (nums[i] < nums[i - 1]) {
      counter++;
      maxCounter = Math.max(counter, maxCounter);
    } else {
      counter = 1;
    }
  }
  return maxCounter || 1;
}
