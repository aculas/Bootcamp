function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let newArray = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  }
  return newArray;
}
