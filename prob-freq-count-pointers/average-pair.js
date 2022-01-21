// This function implies that an array is sorted so that it can calculate the average between two numbers.
function averagePair(arr, num) {
  let start = 0; //Left value
  let end = arr.length - 1; //right value
  /* 
During the while loop, if the average is less than the target num, we have to
move the left pointer up, while the right can stay put. Otherwise if
the average is greater than the sum, we move the right pointer down.
*/
  while (start < end) {
    let avg = arr[start] + arr[end] / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
