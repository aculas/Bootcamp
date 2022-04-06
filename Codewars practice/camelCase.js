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



function convert(str) {
  let n = str.length;
  let str1 = "";
  for ( i = 0; i < n; i++){
    // concerts space to underscore
    if(str[i]== ' '){
      str1 = str1 + "_";
    }else {
     str1 = str1 + (str[i].toLowerCase();
    }
  }
  return str1;
}
 /*
 Input  : I got intern at geeksforgeeks
Output : IGotInternAtGeeksforgeeks
 */