const shiftGrid = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  
  k = k % (m * n);
  
  if (!k) {
    return grid;
  }
  
  const arr = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(grid[i][j]);
    }
  }

  while (k--) {
    arr.unshift(arr.pop());
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = arr.shift();
    }
  }

  return grid;
};

// shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)
shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)