const assert = require('assert');

function waveArray(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

function waveArray(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

assert.deepEqual(waveArray([1, 2, 3, 4, 5]), [2,1,4,3,5]);
assert.deepEqual(waveArray([2, 4, 7, 8, 9, 10]), [4, 2, 8, 7, 10, 9]);