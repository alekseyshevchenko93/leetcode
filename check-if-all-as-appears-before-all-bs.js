/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    const cur = s[i];
    const next = s[i + 1];

    if (!(cur <= next)) {
      return false;
    }
  }

  return true;
};