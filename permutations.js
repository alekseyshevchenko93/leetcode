var permute = function (nums) {
  const results = [];

  const dfs = (memo = []) => {
    if (memo.length === nums.length) {
      return results.push(memo);
    }

    for (let num of nums) {
      if (memo.includes(num)) {
        continue;
      }

      dfs([...memo, num]);
    }
  };

  dfs(nums);

  return results;
};

console.log(permute([1,2,3]));