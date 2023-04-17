const map = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const letterCombinations = function (digits) {
  const results = [];

  if (!digits) {
    return results;
  }

  const dfs = (digitsArr, memo = '') => {
    if (!digitsArr.length) {
      results.push(memo);
      return;
    }

    const digit = digitsArr[0];
    const letters = map[digit];

    for (letter of letters) {
      dfs(digitsArr.slice(1), memo + letter);
    }
  };

  dfs(digits.split(''));

  return results;
};

console.log(letterCombinations('23'));