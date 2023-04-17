function maxSubArray(arr) {
  let max = arr[0];
  let maxCurrent = max;

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

    if (maxCurrent > max) {
      max = maxCurrent;
    }
  }

  return max;
}

console.log('max', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));