const canJump = function (nums) {
  const lastIndex = nums.length - 1;

  const dfs = (currentIndex = 0, memo = {}) => {
    if (currentIndex in memo) {
      return memo[currentIndex];
    }

    if (currentIndex > lastIndex) {
      return false;
    }

    if ((currentIndex === lastIndex)) {
      return true;
    }

    const currentNum = nums[currentIndex];

    if (!currentNum) {
      return false;
    }

    for (let i = 1; i <= currentNum; i++) {
      const newIndex = currentIndex + i;
      memo[currentIndex] = dfs(newIndex, memo);

      if (memo[currentIndex]) {
        return true;
      }
    }

    return memo[currentIndex];
  };

  return dfs();
};

console.log(canJump([[2, 3, 1, 1, 4]]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 0]));
