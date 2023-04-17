const permuteUnique = function (nums) {
  const hash = {};

  const dfs = (nums, current = []) => {
    if (!nums.length) {
      const key = current.toString();
      hash[key] = current;
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
      dfs(remainingNums, current.concat(nums[i]));
    }
  };

  dfs(nums);

  return Object.values(hash);
};

console.log(permuteUnique([1, 1, 2]));