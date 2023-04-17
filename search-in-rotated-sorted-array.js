const assert = require('assert');

const search = function (nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[left] < nums[mid]) {
      if ((target > nums[mid] && target > nums[left]) || (target < nums[mid] && target < nums[left])) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if ((target < nums[mid] && target < nums[right]) || (target > nums[mid] && target > nums[right])) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};


// console.log((search([4, 5, 6, 7, 0, 1, 2], 0)));
// console.log((search([4, 5, 6, 7, 8, 1, 2, 3], 8)));
assert.equal(search([5, 1, 3], 3), 2);
assert.equal(search([5, 1, 3], 5), 0);
assert.equal(search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4);

// [8, 1, 2, 3] mid=1 -> right = mid - 1
// [4, 5, 6, 7, 8, 1, 2, 3], mid=7 -> left = mid + 1
 // [5,1,3] target=3, mid=1 -> left = mid + 1
 // [5,1,3] target=5, mid=1 -> right = mid - 1



// 11 12 3 4 5 6 7 8 9 10
