
function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

const longestPalindrome = function (s) {
  let longest = '';

  let windowSize = s.length;

  while (windowSize && !longest.length) {
    for (let i = 0; i + windowSize - 1 < s.length; i++) {
      const chunk = s.slice(i, i + windowSize);

      if (isPalindrome(chunk) ) {
        if (chunk.length >= longest.length) {
          return chunk;
        }
      }
    }

    windowSize--;
  }

  return longest;
};

console.log('v', longestPalindrome('babad'));