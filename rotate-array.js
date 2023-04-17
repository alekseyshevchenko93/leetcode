const assert = require('assert');

var rotate = function (nums, k) {
  k = k % nums.length;

  if (!k) {
    return nums;
  }

  const temp = nums.slice(-k);

  for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return nums;
};


assert.deepEqual(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
assert.deepEqual(rotate([1, 2], 1), [2, 1]);
assert.deepEqual(rotate([1, 2], 2), [1, 2]);
assert.deepEqual(rotate([1, 2], 3), [2, 1]);
// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 2
// Output: [6, 7, 1, 2, 3, 4, 5]


// 7, 2, 3, 4, 5, 6, 5


// Correct: [5, 6, 7, 1, 2, 3, 4]


