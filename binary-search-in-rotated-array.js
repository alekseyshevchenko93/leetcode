

// const arr = [5, 6, 7, 8, 0, 2];
// const arr = [4, 5, 6, 7, 0, 1, 2];
const arr = [1];

function search(nums, target) {
  if (nums[0] <= nums[nums.length - 1]) {
    return binarySearch(nums, target);
  }

  const pivotIndex = findPivot(nums);

  if (target >= nums[0]) {
    return binarySearch(nums.slice(0, pivotIndex), target);
  } else {
    const found = binarySearch(nums.slice(pivotIndex), target);
    console.log('pivot index', nums.slice(pivotIndex), target, found);
    return ~found ? found + pivotIndex : found;
  }
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  const first = arr[start];

  while (arr[start] > arr[end]) {
    const midpoint = Math.floor(start + (end - start) / 2);
    if (arr[midpoint] >= first) {
      start = midpoint + 1;
    } else if (arr[midpoint] < first) {
      end = midpoint;
    } 
  }

  return start;
}

function binarySearch(arr, target) {
  let start = 0, end = arr.length;

  while (start <= end) {
    const midpoint = Math.floor(start + (end - start) / 2);

    if (arr[midpoint] === target) {
      return midpoint;
    } else if (arr[midpoint] < target) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }

  return -1;
}

console.log(search(arr, 0));
// console.log(binarySearch([0,1,2], 3));