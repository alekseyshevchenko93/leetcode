const exist = function (board, word) {
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const m = board.length;
  const n = board[0].length;

  if (m === 1 && n === 1) {
    return board[0][0] === word;
  }

  // console.log(m, n, board);

  function dfs(x, y, substr) {
    if (!substr) {
      return true;
    }


    if (x >= m || x < 0 || y >= n || y < 0) {
      return false;
    }

    const value = board[x][y];

    if (value !== substr[0]) {
      return false;
    }

    board[x][y] = null;

    for (let direction of directions) {
      const newI = x + direction[0];
      const newJ = y + direction[1];

      if (dfs(newI, newJ, substr.slice(1))) {
        return true;
      }
    }

    board[x][y] = value;

    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, word)) {
        return true;
      }
    }
  }

  return false;
};

// console.log(exist(
//   [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
//   'ABCCED'
// ))

// console.log(exist(
//   [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
//   'SEE'
// ))

// console.log(exist(
//   [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
//   'ABCB'
// ))


// console.log(exist(
//   [["A"]],
//   'A'
// ))


// console.log(exist(
//   [["a", "b"], ["c", "d"]],
//   'abcd'
// ))


console.log(exist(
  [["a", "a"]],
  'aa'
))

console.log(exist(
  [["b"], ["a"], ["b"], ["b"], ["a"]],
  'baa'
))
