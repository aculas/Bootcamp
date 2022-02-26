// This function implies that an array is already sorted.
// First time through loop this looks
function binarySearch(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor(leftIdx + rightIdx) / 2;
    let middleVal = arr[middleIdx];
    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
    return -1;
  }
  //   const middleIdx = Math.floor(arr.length - 1) / 2;
  //   if(arr[middleIdx] === val) {
  //     return middleIdx;
  //   } else if(array[middleIdx] > val) {

  //   } else{

  //   }

  //   console.log(middleIdx);
}

//Big O:  n  in terms of Big O stands for the number of inputs into an element or numbers etc.
// Worst case is O (n2) this is slow
