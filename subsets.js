
function getPermutations(nums, currentWindow) {
  const results = [];

  const permute = (memo = [], remaining = nums) => {
    if (memo.length === currentWindow) {
      results.push(memo);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const item = remaining[i];
      const newRemaining = remaining.slice(i + 1);

      permute(memo.concat(item), newRemaining);
    }
  };

  permute();

  return results;
}

const subsets = function (nums) {
  const maxWindow = nums.length;
  let curWindow = 0;
  const results = [];

  while (curWindow <= maxWindow) {
    const permutations = getPermutations(nums, curWindow);
    results.push(permutations);
    curWindow++;
  }

  return results.reduce((memo, item) => {
    return memo.concat(item);
  }, []);
};

// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([1, 2, 3]));
