/*
Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, including them.
*/

function between(a, b) {
  // starts off with empty array
  let sum = [];
  //   loops through the values of a & b
  for (let i = a; i <= b; i++) {
    //   pushes the values of i into the sum array
    sum.push(i);
  }
  //   returns the sum
  return sum;
}
