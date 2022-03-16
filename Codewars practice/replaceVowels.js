function replaceVowels(arr) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[i]) {
        arr[i] = "*";
      }
    }
    return arr;
  }
}
