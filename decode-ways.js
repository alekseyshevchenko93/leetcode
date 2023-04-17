const numDecodings = function (s) {
  const map = {};

  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(i + 65);
    map[i + 1] = c;
  }

  function dfs(str, decoded = '', memo = {}) {
    if (str in memo) {
      return memo[str];
    }

    if (!str) {
      return 1;
    }

    const steps = str.length > 1 ? [1, 2] : [1];

    memo[str] = 0;

    for (let step of steps) {
      const chunk = str.slice(0, step);

      if (!map[chunk]) {
        continue;
      }

      const value = dfs(str.slice(step), decoded + map[chunk], memo);
      memo[str] += value;
    }

    return memo[str];
  }

  const m = {};
  return dfs(s, '', m);
};

console.log(numDecodings('1111'));