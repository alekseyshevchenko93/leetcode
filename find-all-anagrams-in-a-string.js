
function getFreqKey(s) {
  const hash = {};

  for (let c of s) {
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  return Object.entries(hash).sort(([k1], [k2]) => k1.localeCompare(k2)).reduce((memo, [key, value]) => {
    return memo + key + value;
  }, '');
}

const findAnagrams = function(s, p) {
  if (p.length > s.length) {
    return [];
  }

  const pKey = getFreqKey(p);
  const results = [];

  for (let i = 0; i <= s.length - p.length; i++) {
    const substr = s.slice(i, i + p.length);

    const key = getFreqKey(substr);

    if (key !== pKey) {
      continue;
    }

    results.push(i);
  }

  return results;
};

findAnagrams('abab', 'ab');
// findAnagrams('ababababab', 'aab');
// findAnagrams('aaaaaaaaaa', 'aaaaaaaaaaaaa');

