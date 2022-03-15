function battle(x, y) {
  const first = splitIt(x);
  const second = splitIt(y);
  if (first > second) {
    return x;
  } else if (first < second) {
    return y;
  } else {
    return "Tie!";
  }
}

function splitIt(x) {
  return x
    .split("")
    .map((elem) =>
      elem === elem.toLowerCase()
        ? (elem.charCodeAt() - 96) / 2
        : elem.charCodeAt() - 64
    )
    .reduce((acc, num) => acc + num);
}
