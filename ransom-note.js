

var canConstruct = function (ransomNote, magazine) {
  const hash = {};

  for (let item of magazine) {
    if (hash[item]) {
      hash[item]++;
    } else {
      hash[item] = 1;
    }
  }

  for (let item of ransomNote) {
    if (!(item in hash)) {
      return false;
    }

    if (!hash[item]) {
      return false;
    }

    hash[item]--;
  }

  console.log('hash', hash);

  return true;
};

console.log(canConstruct('aa', 'aab'));