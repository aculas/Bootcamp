/* This function takes 2 nums and converts then into string using the built in toString() method.
Then it compares the lengths of these and returns falsy if they are not the same length. Then an empty counter object is used
to start and for loops are used to count each. Lastly, the key in counts are compared to check for falsy, otherwie they return truthy.



*/
function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    count2[str2[j]] = (count2[str2[j]] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}
