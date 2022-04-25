function minimumDistance(area) {
  // Set empty counter
  let distance = 0;
  // Create a 1d array
  let array = new Array(3);
  // Loops pver 1d array to create 2d array
  for (let i = 0; i < array.length; i++) {
    array[i] = [];
    for (let j = 0; j < area.length; j++) {
      area += distance;
    }
  }
}

function minimumDistance(area) {
  // starts off with counter variable
  let distance = [];

  //   Loops over the length of the area of a 2d array
  for (let i = 0; i < area.length; i++) {
    let myObj = {};
    //   Nested loop that loops over the elements inside the first array
    for (let j = 0; j < area[i].length; j++) {
      // sets the values to be equal of area
      myObj[distance[i][j][0]] = area[i][j][1];
      distance.push(myObj);
    }
  }
  return distance;
}
