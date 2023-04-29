const rob = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  const memo = {};

  const dfs = (i = 0, sum = 0) => {
    if (i in memo) {
      return sum;
    }

    memo[i] = sum;

    if (i >= nums.length) {
      max = Math.max(sum, max);
      return;
    }

    const num = nums[i];

    dfs(i + 2, sum + num);
    dfs(i + 1, sum);
  };

  dfs();

  // console.log('memo', memo);
  return max;
};

rob([2,7,9,3,1]);