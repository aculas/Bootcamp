function powersOfTwo(n) {
  // creates an empty array to store the content
  let result = [];
  //   runs a for loop to iterate over the value of n
  for (let i = 0; i <= n; i++) {
    //   takes the initial array and pushes the results of Math.pow of 2 and whatever the value of i is
    // in this case i wil be whatever number is passed into the function.
    result.push(Math.pow(2, i));
  }
  return result;
}
