function insertionSort(arr) {
  let newArr = [];
  if (arr.length > 0) {
    function findMinAndRemove(arr) {
      //insertionSort helper method to remove min value from array an recurse
      let min = arr[0];
      //sets min value to first element
      for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        }
        // if  the i'th element is smaller reassign min value to it
      }
      newArr.push(min);
      // add smallest element to new array and recurse
      arr.splice(arr.indexOf(min), 1);
      return insertionSort(arr);
    }
  } else {
    return newArr;
  }
}

const search = (nums, target) => {
  // declare start and end
  let start = 0;
  let end = nums.length - 1;
  // base condition
  while (start <= end) {
    // find the mid point
    let mid = Math.floor((start + end) / 2);
    // if middle element is the target, return middle index
    if (nums[mid] === target) {
      return mid;
      // if middle element is smaller, move the start point to mid + 1
    } else if (nums[mid] < target) {
      start = mid + 1;
      // if middle element it greater, move the end point to mid - 1
    } else {
      end = mid - 1;
    }
  }
  // if not found, return -1
  return -1;
};

//Time complexity is O(logN).
