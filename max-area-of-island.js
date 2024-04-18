const computeKey = (i, j) => `${i}:${j}`;

const MOVES = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

function isValidMove(i, j, grid, visited) {
  const key = computeKey(i, j);
  const m = grid.length;
  const n = grid[0].length;

  return !visited.has(key) && i >= 0 && i < m && j >= 0 && j < n && grid[i][j];
}

function maxAreaOfIsland(grid) {
  const visited = new Set;
  let maxArea = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const key = computeKey(i, j);

      if (!grid[i][j] || visited.has(key)) {
        continue;
      }
      
      const q = [[i, j]];
      let area = 0;

      while (q.length) {
        const [x, y] = q.shift();

        if (visited.has(computeKey(x, y))) {
          continue;
        }

        area++;
        visited.add(computeKey(x, y));

        for (let move of MOVES) {
          const [movex, movey] = move;

          const newx = movex + x;
          const newy = movey + y;

          if (isValidMove(newx, newy, grid, visited)) {
            q.push([newx, newy]);
          }
        }
      }

      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

// console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));
console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));