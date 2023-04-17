const wordBreak = function (str, wordDict, memo = {}) {
  if (str in memo) {
    return memo[str];
  }

  if (!str) {
    return true;
  }

  for (let word of wordDict) {
    if (!str.startsWith(word)) {
      continue;
    }

    const suffix = str.slice(word.length);

    if (wordBreak(suffix, wordDict, memo)) {
      memo[str] = true;
      return memo[str];
    }
  }

  memo[str] = false;

  return memo[str];
};

console.log(
  wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
  ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
  )
);