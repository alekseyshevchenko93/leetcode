const assert = require('assert');

const union = function(nums1, nums2) {
  let i = 0, j = 0;

  let result = [];

  while (i < nums1.length && j < nums2.length) {
    const min = Math.min(nums1[i], nums2[j]);

    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums1[i]) {
      j++;
    } else {
      i++;
      j++;
    }

    if (result[result.length - 1] !== min) {
      result.push(min);
    }
  }

  if (i < nums1.length) {
    return result.concat(nums1.slice(i));
  }

  if (j < nums2.length) {
    return result.concat(nums2.slice(j));
  }

  return result;
};


assert.deepEqual(union([2,3,4,7,8], [1,2,4,6,7,8,10]), [1,2,3,4,6,7,8,10]);