var maxSubArray = function (nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let len = nums.length;
  let currentLen = 1;

  function findSum(arr) {
    return arr.reduce((memo, e) => {
      return memo + e;
    }, 0);
  }

  while (currentLen <= len) {
    for (let i = 0; i < nums.length; i++) {
      const slice = nums.slice(i, i + currentLen);
      const sum = findSum(slice);
      maxSum = Math.max(sum, maxSum);
    }

    currentLen++;
  }

  return maxSum;
};

const r = maxSubArray([-2, -1]);
console.log(r);