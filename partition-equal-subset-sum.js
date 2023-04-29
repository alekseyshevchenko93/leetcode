const canPartition = function (nums) {
  // nums.sort((a, b) => a - b);

  const sum = nums.reduce((memo, num) => {
    return memo + num;
  }, 0);

  if (sum & 1) {
    return false;
  }

  const target = sum / 2;
  const memo = {};

  const dfs = (i, targetSum) => {
    const key = `${i},${targetSum}`;

    if (i >= nums.length) {
      return false;
    }

    if (targetSum - nums[i] === 0) {
      return true;
    }

    if (key in memo) {
      return memo[key];
    }

    if (nums[i] <= targetSum) {
      memo[key] = dfs(i + 1, targetSum - nums[i]);
    }

    memo[key] = memo[key] || dfs(i + 1, targetSum);

    return memo[key];
  };

  return dfs(0, target);
};


console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([18, 19, 2, 1]));
console.log(canPartition([2, 3, 14, 9, 8, 4]));

// console.log(canPartition([2, 2, 1, 1]));
// console.log('res', canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97]));

// console.log(canPartition([1, 2, 3, 5]));
// console.log(canPartition([1, 2, 5]));
