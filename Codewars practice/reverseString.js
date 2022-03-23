function wordReverse(str) {
  let str = "";
  // This converts the string to an array
  let arr = str.split(" ");
  //   Starts at the end and counts backwards through the array
  for (let i = arr.length; i > 0; i--) {
    str += arr[i];
  }
  return str;
}

// length - 1 is last element in index
// First in last out menthod
// an arr starts off in order when pushed in a stack then popped off it is backwards
