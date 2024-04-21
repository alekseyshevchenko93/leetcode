const REPLACE_WITH_CHAR = 'T';
const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0]
];

const solve = function(board) {
  const m = board.length;
  const n = board[0].length;
  const visited = new Set;

  const dfs = (i, j) => {
    if (visited.has(`${i}:${j}`)){
      return;
    }

    visited.add(`${i}:${j}`);

    board[i][j] = REPLACE_WITH_CHAR;

    for (let [movex, movey] of DIRECTIONS) {
      const newx = i + movex;
      const newy = j + movey;

      if (newx >= 0 && newx < m && newy >= 0 && newy < n && board[newx][newy] === 'O') {
        dfs(newx, newy);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'X') {
      continue;
    }

    dfs(0, i);
  }

  for (let i = 0; i < m; i++) {
    if (board[i][n - 1] === 'X') {
      continue;
    }

    dfs(i, n - 1);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (board[m - 1][i] === 'X') {
      continue;
    }
    
    dfs(m - 1, i);
  }

  for (let i = m - 1; i >= 0; i--) {
    if (board[i][0] === 'X') {
      continue;
    }

    dfs(i, 0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }

      if (board[i][j] === 'T') {
        board[i][j] = 'O';
      }
    }
  }

  return board;
};

// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));
console.log(solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]));

// console.log(solve([["O","O"],["O","O"]]));
// console.log(solve([["O","O","O"],["O","X","O"],["O","O","O"]]));