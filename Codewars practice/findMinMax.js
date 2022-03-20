// These are anonymous functions
// one solution
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// Another solution that uses a for loop which is less effecient O(n)
function min(list) {
  let minimum = list[0];
  for (let i = 0; i < list.length; i++) {
    let cur = list[i];
    if (cur < minimum) minimum = cur;
  }
  return minimum;
}

function max(list) {
  let maximum = list[0];
  for (let i = 0; i < list.length; i++) {
    let cur = list[i];
    if (cur > maximum) maximum = cur;
  }
  return maximum;
}
