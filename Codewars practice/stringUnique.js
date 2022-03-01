// One solution
function areUnique(str) {
  for (let i = 0; i < str.length - 1; i++)
    if (str.charAt(i) === str.charAt(i + 1)) {
      return false;
    }
  return true;
}

// antoher solution

function areUniqueTwo(str) {
  // Set an empty object
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      return false;
    } else {
      obj[char] = true;
    }
  }
  return true;
}

// Third way

function stringIsUnique(input) {
  for (i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
      return false;
    }
  }
  return true;
}
