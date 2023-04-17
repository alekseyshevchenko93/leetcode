/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

function copyHash(hash) {
  return Object.entries(hash).reduce((memo, [key, value]) => {
    memo[key] = value;
    return memo;
  }, {});
}

function isGoodWord(word, hash) {
  for (let c of word) {
    if (!hash[c]) {
      return false;
    }

    hash[c]--;
  }

  return true;
}

var countCharacters = function (words, chars) {
  const hash = {};
  let result = 0;

  for (let c of chars) {
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  for (let word of words) {
    if (isGoodWord(word, copyHash(hash))) {
      result += word.length;
    }
  }

  return result;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], 'atach'));