/*
Given a binary tree represented as an array, for example, [3,6,2,9,-1,10] 
represents a binary tree and -1 is a non existent node. Write a function 
that determines whether the left or right branch of the ree is larger. 
The size of each branch s the sum of the node values. 
The function should return the string "Right" if the right size is larger 
and "Left" if the left size is larger. 
If the tree has 0 nodes of it the size of the branches are equal, return the empty string.
*/

const solution = (arr) => {
  if (!arr) return "";
  if (arr.length === 0) return "";
  const sum = (arr, idx) => {
    if (idx - 1 < arr.length) {
      if (arr[idx - 1] === -1) return 0;
      return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
    }
    return 0;
  };
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  return left == right ? "" : left > right ? "Left" : "Right";
};
