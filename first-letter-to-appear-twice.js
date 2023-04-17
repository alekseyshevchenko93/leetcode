var repeatedCharacter = function (s) {
  const hash = {};

  for (let c of s) {
    if (hash[c]) {
      return c;
    } else {
      hash[c] = 1;
    }
  }
}