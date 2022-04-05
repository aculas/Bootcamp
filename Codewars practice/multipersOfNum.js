function findMultiples(int, limit) {
  let multiples = [];
  for (let i = int; i <= limit; i += int) {
    multiples.push(i);
  }
  return multiples;
}
