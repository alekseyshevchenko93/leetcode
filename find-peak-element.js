const assert = require('assert');

function findPeakElement(arr) {
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}


assert.deepEqual(findPeakElement([1, 2, 1, 3, 5, 6, 4]), 5);

