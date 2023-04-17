const lengthOfLongestSubstring = function (s) {
  let substrStart = 0;
  let max = 0;
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!(c in hash)) {
      hash[c] = i;
      continue;
    }

    const prevIdx = hash[c];
    const currentLen = i - substrStart;
    const newSubstrStart = prevIdx + 1;

    for (let j = substrStart; j < newSubstrStart; j++) {
      delete hash[s[j]];
    }

    substrStart = newSubstrStart;
    hash[c] = i;

    max = Math.max(max, currentLen);
  }

  max = Math.max(max, Object.keys(hash).length);

  return max;
};

// console.log(lengthOfLongestSubstring('dvdf'));
// console.log(lengthOfLongestSubstring('abcadef'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring(' '));
// console.log(lengthOfLongestSubstring('abcadcbcfadeb'));

// abcadefgbz
// { a: 1, b: 1: c 1 }
// t a b c a d e f        b c a d e f
// b c a d e f

// { p: 1, w: 1 } 2
// p w w k e w

// p w w, max = 2
// w k e w, max = 3

// { a: 3, b: 1, c: 5, d: 4 } substrStart = 0
// a b c a d c b c f a d e b
// "a" - a b c; i = 3, i - subsr = 3
// substrStart = 1

// "c" - b c a d
// substrStart = 3 i = 5, i - substrStart = 5 - 1 = 4
// substrStart = 3

// "b" -



