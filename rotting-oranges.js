const STATUS = {
  EMPTY: 0,
  FRESH: 1,
  ROTTEN: 2
};

const hasFresh = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = grid[i][j];

      if (item === STATUS.FRESH) {
        return true;
      }
    }
  }

  return false;
};

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0]
];

const orangesRotting = function (grid) {
  if (!hasFresh(grid)) {
    return 0;
  }

  const q = [];
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = grid[i][j];

      if (item === STATUS.ROTTEN) {
        q.push([i, j]);
      }
    }
  }

  let minute = 0;

  while (q.length) {
    const items = q.slice();

    for (let i = 0; i < items.length; i++) {
      const [i, j] = q.shift();

      for (direction of DIRECTIONS) {
        const [x, y] = direction;
        const newX = i + x;
        const newY = j + y;

        if (newX >= m || newX < 0 || newY >= n || newY < 0) {
          continue
        }

        if ([STATUS.ROTTEN, STATUS.EMPTY].includes(grid[newX][newY])) {
          continue;
        }

        q.push([newX, newY]);
        grid[newX][newY] = STATUS.ROTTEN;
      }
    }

    minute++;
    // console.log(minute++, JSON.stringify(grid));
  }

  // console.log(grid, minute - 1);
  return hasFresh(grid) ? -1 : minute - 1;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
// console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));
// console.log(orangesRotting([[2, 2], [1, 1], [0, 0], [2, 0]]));