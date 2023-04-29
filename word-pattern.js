const wordPattern = function (pattern, s) {
  const words = s.split(' ');
  const hash = {};
  const set = new Set();

  if (pattern.length !== words.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];

    if (!hash[c] && !set.has(words[i])) {
      hash[c] = words[i];
      set.add(words[i]);
      continue;
    }

    if (!hash[c] && set.has(words[i])) {
      return false;
    }

    if (hash[c] !== words[i]) {
      return false;
    }
  }

  return true;
};

// console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
