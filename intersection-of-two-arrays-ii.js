const assert = require('assert');

const intersection = function(nums1, nums2) {
  const hash = {};

  for (let num of nums1) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  const result = [];

  for (let num of nums2) {
    if (hash[num]) {
      hash[num]--;
      result.push(num);
    } 
  }

  return result;
};


assert.deepEqual(intersection([1,2,2,1], [2,2]), [2, 2]);