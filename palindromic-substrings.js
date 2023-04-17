
function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

const countSubstrings = function (s) {
  const palindroms = {};

  let windowSize = 3;//s.length - 1;

  while (windowSize) {
    for (let i = 0; i + windowSize - 1 < s.length; i++) {
      const chunk = s.slice(i, i + windowSize);
      // console.log(chunk);

      if (palindroms[chunk] || isPalindrome(chunk)) {
        palindroms[chunk] = (palindroms[chunk] || 0) + 1;
        // palindroms.push(chunk);
      }
    }

    windowSize--;
  }

  console.log(palindroms);

  return Object.values(palindroms).reduce((memo, num) => {
    return memo + num;
  });
  // return palindroms.length;
};

console.log('v', countSubstrings('aaa'));