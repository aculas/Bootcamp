const minFlipsMonoIncr = function (S) {
  const memo = {};
  const aux = (index, prev) => {
    memo[index] = memo[index] || {};
    if (memo[index][prev] !== undefined) {
      return memo[index][prev];
    }
    if (index >= S.length) {
      return 0;
    }
    if (prev === "0") {
      if (S[index] === "0") {
        memo[index][prev] = Math.min(
          aux(index + 1, "0"),
          aux(index + 1, "1") + 1
        );
      } else {
        memo[index][prev] = Math.min(
          aux(index + 1, "1"),
          aux(index + 1, "0") + 1
        );
      }
    } else if (S[index] === "0") {
      memo[index][prev] = aux(index + 1, "1") + 1;
    } else {
      memo[index][prev] = aux(index + 1, "1");
    }
    return memo[index][prev];
  };
  return aux(0, "0");
};

// replacing "0" with "H" and "1" with "T".
