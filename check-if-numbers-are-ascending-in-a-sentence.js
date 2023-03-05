/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const nums = s.match(/[0-9]+/g).map(Number);

  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur >= next) {
      return false;
    }
  }

  return true;
};