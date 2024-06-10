const removeDuplicateLetters = function(s) {
  const hash = {};

  for (let c of s) {
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  const res = [];
  const visited = new Set;

  for (let c of s) {
    hash[c]--;

    if (visited.has(c)) {
      continue;
    }

    while (c < res[res.length - 1] && hash[res[res.length - 1]] > 0) {
      visited.delete(res.pop());
    }

    res.push(c);
    visited.add(c);
  }

  return res.join('')
};

console.log(removeDuplicateLetters('cbacdcbc'));