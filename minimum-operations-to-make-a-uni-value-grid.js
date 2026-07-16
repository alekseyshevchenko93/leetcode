const assert = require('assert')

const minOperations = function(grid, x) {
  let ops = 0;
  const arr = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[0][0] % x !== grid[i][j] % x) {
        return -1;
      }

      arr.push(grid[i][j]);
    }
  }

  arr.sort((a, b) => a - b);
  
  const mid = arr[Math.floor(arr.length / 2)];

  for (let i = 0; i < arr.length; i++) {
    ops += Math.abs(mid - arr[i]) / x;
  }

  return ops;
};

assert.equal(minOperations([[1,2],[3,4]], 2), -1);
assert.equal(minOperations([[2,6],[10,15]], 4), -1);

assert.equal(
  minOperations([
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
  ], 2), 
  20
);

assert.equal(
  minOperations(
    [[2,4],[6,8]]
  , 2), 
  4
);