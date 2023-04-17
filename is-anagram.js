const assert = require('assert');

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let c of s) {
    if (!map1[c]) {
      map1[c] = 1;
    } else {
      map1[c]++;
    }
  }

  for (let c of t) {
    if (!map2[c]) {
      map2[c] = 1;
    } else {
      map2[c]++;
    }
  }

  const keys = new Set(Object.keys(map1).concat(Object.keys(map2)));

  for (let key of keys) {
    if (map1[key] !== map2[key]) {
      return false
    }
  }

  return true;
};

// assert.equal(isAnagram('anagram', 'nagaram'), true);
// assert.equal(isAnagram('anagram', 'nagaramm'), false);
assert.equal(isAnagram('aacc', 'accc'), false);