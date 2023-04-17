/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = 0,
    counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!counter) {
      candidate = nums[i];
    }
    if (candidate === nums[i]) {
      counter++;
    } else {
      counter--;
    }
  }

  return candidate;
};