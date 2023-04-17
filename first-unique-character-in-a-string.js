var firstUniqChar = function (s) {
  const hash = {};
  let index = -1;

  for (let c of s) {
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const freq = hash[c];

    if (freq === 1) {
      return i;
    }
  }

  return index;
};