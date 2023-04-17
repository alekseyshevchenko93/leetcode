
const combinationSum = function (candidates, target) {
  const results = [];

  const dfs = (candidates, currentSum = 0, currentItems = []) => {
    if (currentSum === target) {
      results.push(currentItems);
      return;
    }

    if (currentSum > target) {
      return;
    }

    candidates.forEach((candidate, i) => {
      const newCandidates = candidates.slice(i)
      dfs(newCandidates, currentSum + candidate, currentItems.concat(candidate));
    });
  };

  dfs(candidates);

  return results;
};

combinationSum([2,3,5], 8);