/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function matchMaps(a, b) {
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Map = s1.split('').reduce((memo, c) => {
    if (memo[c]) {
      memo[c]++;
    } else {
      memo[c] = 1;
    }

    return memo;
  }, {});

  const s2Map = {};

  for (let i = 0; i < s2.length; i++) {
    const c = s2[i];

    if (i >= s1.length) {
      const item = s2[i - s1.length];

      if (s2Map[item] === 1) {
        delete s2Map[item];
      } else {
        s2Map[item]--;
      }
    }

    if (s2Map[c]) {
      s2Map[c]++;
    } else {
      s2Map[c] = 1;
    }

    if (matchMaps(s1Map, s2Map)) {
      return true;
    }
  }

  return false;
};

var checkInclusioBySorting = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Sorted = s1.split('').sort().join('');

  for (let i = 0; i <= s2.length - s1.length; i++) {
    const substr = s2.slice(i, i + s1.length);
    const sortedSubstr = substr.split('').sort().join('');

    if (sortedSubstr === s1Sorted) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion('ab', 'cab'))