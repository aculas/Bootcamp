function snakeToCamel(str) {
  let newStr = "";
  let snake = "_";
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
      newStr[i] += snake[i].charAt(0) + snake[i].slice(1);
    } else {
      snake += str[i];
    }
    return newStr;
  }
  return newStr;
}

// Second example

function camelCase(str) {
  //splitStr will be an array
  var splitStr = [];
  var result = "";

  splitStr = str.split(" ");

  //Capitalize first letter of words starting from the second one
  for (var i = 0; i < splitStr.length; i++) {
    //first word
    if (i === 0) {
      //Good practice to lowercase the first letter regardless of input
      result += splitStr[i][0].toLowerCase() + splitStr[i].slice(1);
    } else {
      //rest can proceed as before
      result += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
    }
  }

  return result;
}

function snakeToCamel(str) {
  return str;
}
