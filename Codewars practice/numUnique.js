// First exmaple
const uniqueOccurrences = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }
  return true;
};

//Second example Given an array of unique nums and a num return true of there exists a pair of nums in arr that sum to the num given

function chkPair(arr, sum) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        return true;
      }
    }
  }

  return false;
}

// O(n2)
