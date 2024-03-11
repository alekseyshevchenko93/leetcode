const assert = require('assert');

const intersection = function(nums1, nums2) {
  let i = 0, j = 0;

  const result = [];

  while (i < nums1.length && j < nums1.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums1[i]) {
      j++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
};


assert.deepEqual(intersection([2,2,2,3,3,4,7,8], [1,2,4,4,6,6,7,8,10]), [2,4,7,8]);