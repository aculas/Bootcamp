// This is a brute force approach to

function squares(nums1, nums2) {
  if (nums1.length !== nums2.length) {
    return false;
  }

  for (let i = 0; i < nums1.length; i++) {
    let correctIndex = nums2.indexOf(nums1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }

    nums2.splice(correctIndex, 1);
  }

  return true;
}

// Same approach using frequency counters

// a function to create a simple
// frequency counter using an object
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}

// a function to create a simple
// frequency counter using a map
function createFrequencyCounter(array) {
  let frequencies = new Map();

  for (let val of array) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}
