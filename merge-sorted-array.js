const assert = require('assert');

var merge = function (nums1, m, nums2, n) {
  const temp = nums1.slice(0, m);
  let k = m + n;
  let i = 0;

  if (!n) {
    return nums1;
  }

  while (i < k && nums2.length) {
    let elem = temp[0] < nums2[0] ? temp.shift() : nums2.shift();
    nums1[i++] = elem;
  }

  while (temp.length) {
    nums1[i++] = temp.shift();
  }

  return nums1;
};

// assert.deepEqual(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6]);
// assert.deepEqual(merge([1], 1, [], 0), [1]);
// assert.deepEqual(merge([0], 0, [1], 1), [1]);
// assert.deepEqual(merge([2, 0], 1, [1], 1), [1, 2]);
assert.deepEqual(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3), [1, 2, 3, 4, 5,6 ]);
