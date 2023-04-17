const assert = require('assert');

var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const arr = new Array(n).fill(0);

  nums.forEach((num) => {
    arr[num - 1] = true;
  })

  return arr.reduce((memo, num, i) => {
    if (num) {
      return memo;
    } else {
      return memo.concat(i + 1);
    }
  }, []);
};

assert.deepEqual(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
assert.deepEqual(findDisappearedNumbers([1, 1]), [2]);