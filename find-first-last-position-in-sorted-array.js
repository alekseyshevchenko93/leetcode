'use strict';

const binarySearch = (arr, value) => {
  let low = 0, high = arr.length - 1, mid;

  while (low <= high) {
    console.log('low', low, high);
    mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

const searchRange = (nums, target) => {
  const v = binarySearch(nums, target);
  console.log(v)
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));