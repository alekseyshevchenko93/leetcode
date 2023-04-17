
var longestPalindrome = function (s) {
  const hash = {};

  for (let c of s) {
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  let sum = 0, oddFound = false;
  // console.log('hash', hash);

  for (let item of Object.values(hash)) {
    if (!(item % 2)) {
      sum += item
    } else {
      oddFound = true;
      sum += item - 1;
    }
  }

  return oddFound ? ++sum : sum;
};

console.log(longestPalindrome('ababababa'));
console.log(longestPalindrome('bananas'));