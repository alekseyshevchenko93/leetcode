const assert = require('assert');

const twoSum = function(numbers, target) {
  let l = 0, r = numbers.length - 1;

  while (l <= r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    }

    if (sum > target) {
      r--;
      continue
    }

    if (sum < target) {
      l++;
      continue
    }
  }
};

assert.deepEqual(twoSum([2,7,11,15], 9), [1,2]);
assert.deepEqual(twoSum([2,3,4], 6), [1,3]);
assert.deepEqual(twoSum([-1, 0], -1), [1,2]);