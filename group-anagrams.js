
const computeKey = (str) => {
  const charToFreqMap = str.split('').reduce((memo, c) => {
    if (memo[c]) {
      memo[c]++;
    } else {
      memo[c] = 1;
    }
    return memo;
  }, {});

  return Object.entries(charToFreqMap)
    .sort(([a], [b]) => b.localeCompare(a))
    .reduce((memo, [char, freq]) => {
      return memo + char + freq;
    }, '');
};

const groupAnagrams = function (strs) {
  const groups = strs.reduce((memo, str) => {
    const key = computeKey(str);

    if (memo[key]) {
      memo[key].push(str);
    } else {
      memo[key] = [str];
    }
    return memo;
  }, {});

  // console.log(groups);

  return Object.values(groups);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));