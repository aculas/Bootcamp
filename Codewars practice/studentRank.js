const studentImbalances = (array) => {
  array.sort((a, b) => (a > b ? -1 : 1)); // sort array in descending order
  let imbalances = 0;
  let newArray = [...array]; // second array minus index[0] to loop over
  newArray.splice(0, 1);
  while (array.length >= 2) {
    array.forEach((a) => {
      newArray.forEach((a2) => {
        if (a - a2 > 1) {
          imbalances++;
        }
      });
      newArray.splice(0, 1);
    });
    array.splice(0, 1);
  }
  return imbalances;
};
