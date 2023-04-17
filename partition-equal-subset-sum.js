const canPartition = function (nums) {
  nums.sort((a, b) => a - b);

  const sum = nums.reduce((memo, num) => {
    return memo + num;
  }, 0);

  if (sum % 2) {
    return false;
  }

  const subsetSum = sum / 2;

  console.log(nums);

  const dfs = (nums, currentSum = 0, subset = []) => {
    if (currentSum === subsetSum) {
      return true;
    }

    if (currentSum > subsetSum) {
      return false;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      const numsCopy = nums.slice();
      numsCopy.splice(i, 1);

      if (dfs(numsCopy, currentSum + num, subset.concat(num))) {
        return true;
      }
    }

    return false;
  };

  return dfs(nums);
};

// console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 2, 3, 5]));
// console.log(canPartition([1, 2, 5]));

console.log(canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97]));