// This function takes a list and filters numbers from the list

function filter_list(l) {
  let res = [];
  for (let item = 0; item < l.length; item++) {
    if (typeof l[item] === "number") {
      res.push(l[item]);
    }
  }
  return res;
}
