function arrayString(array) {
  let nameString = "";
  for (let i = 0; i < array.length; i++) {
    // if it is not the element before the last one, add a comma
    if (i < array.length - 2) {
      // take the element on position i. arrays start on position 0
      nameString = nameString + array[i] + ", ";
      // a short version would be nameString += array[i] + ", ";
    }
    // if it IS the element before the last one, add and
    else if (i === array.length - 2) {
      nameString = nameString + array[i] + " and ";
    }
    // the only uncovered element is the last one, therefore an else is enough
    else {
      nameString = nameString + array[i];
    }
  }
  // finally you  have to return the final string
  return nameString;
}
// Work in Progress
function nameSplit(array) {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.push();
      return array;
    }
  }
  return "name not found";
}
