/*
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
*/

function count() {
  let count = 1;
  return function () {
    return count++;
  };
}

// Another approach
function counter() {
  let num = 0;
  const newCounter = () => {
    num++;
    return num;
  };
  return newCounter;
}
