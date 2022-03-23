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
// First in last out method ex: a,b,c,d will return d,c,b,a
// an arr starts off in order when pushed in a stack then popped off it is backwards

// Similar approach using a arrow function and reverses in place
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

reverseString("hello world!");
// => !dlrow olleh
