function leftBinarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  let idx = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      idx = mid;
      right = mid - 1;
      continue;
    }

    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }

    if (nums[mid] < target) {
      left = mid + 1;
      continue;
    }
  }

  return idx;
}

function rightBinarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  let idx = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      idx = mid;
      left = mid + 1;
      continue;
    }

    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }

    if (nums[mid] < target) {
      left = mid + 1;
      continue;
    }
  }

  return idx;
}

const searchRange = function (nums, target) {
  const leftIdx = leftBinarySearch(nums, target);
  const rightIdx = rightBinarySearch(nums, target);

  return [leftIdx, rightIdx];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([], 0));
console.log(searchRange([1], 1));
