function solutions(arr, n) {
  arr.sort();

  let max_count = 1,
    res = arr[0];
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else {
      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }
      curr_count = 1;
    }
  }

  if (curr_count > max_count) {
    max_count = curr_count;
    res = arr[n - 1];
  }
  return res;
}

function solution(arr) {
  //sorts the array to be in order
  arr.sort();
  //start off with max frequency and most frequency counters
  let maxFreq = 0;
  let mostFreq = -1;
  // Using a for loop for the length of the array to check values
  for (let i = 0; i < arr.length; i++) {
    let countFreq = 1;
    // uses a nested loop(not the most efficient)
    for (let j = 0; j < arr; j++) {
      if (arr[i] == arr[j]) countFreq = countFreq + 1;
    }
    if (maxFreq < countFreq) {
      maxFreq = countFreq;
      mostFreq = arr[i];
    } else if (maxFreq == countFreq) mostFreq = arr.min(mostFreq);
  }
  return mostFreq;
}
