const assert = require('assert');

const intersection = function(nums1, nums2) {
  const s = new Set;

  for (let num of nums1) {
    s.add(num);
  }

  const intersection = new Set;

  for (let num of nums2) {
    if (s.has(num)) {
      intersection.add(num);
    }
  }

  return [...intersection];
};


assert.deepEqual(intersection([1,2,2,1], [2,2]), [2]);