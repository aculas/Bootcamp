function remainder(n, m) {
  // an if statement that determines which value is larger than the other
  // the return statement uses a modulo operator as its return value.
  // The last statemet is for situations where n is the larger number.
  if (m > n) {
    return m % n;
  } else return n % m;
}
