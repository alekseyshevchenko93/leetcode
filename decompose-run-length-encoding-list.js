const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i += 2) {
    const [count, char] = nums.slice(i, i + 2);
    newArr = newArr.concat(new Array(count).fill(char));
  }

  return newArr;
};

const nums = [1,2,3,4];

const result = decompressRLElist(nums);
assert.deepEqual(result, [2,4,4,4]);