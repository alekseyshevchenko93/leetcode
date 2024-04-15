const isSolved = (board) => {
  return board.toString() === '1,2,3,4,0,0';
};

const copyBoard = (board) => JSON.parse(JSON.stringify(board));

const swap = (board, i, j, m, n) => {
  const temp = board[i][j];
  board[i][j] = board[m][n] 
  board[m][n] = temp;
}

const slidingPuzzle = function(board) {
  const visited = new Set;
  const q = [board];
  let step = 0;
  let minStep = Number.POSITIVE_INFINITY;

  while (q.length) {
    const items = q.slice();

    for (let item of items) {
      q.shift()

      const key = item.toString();

      if (visited.has(key)) {
        continue;
      }

      visited.add(key);

      if (isSolved(item)) {
        minStep = Math.min(minStep, step);
        continue;
      }

      for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item[i].length; j++) {
          const elem = item[i][j];

          if (!elem) {
            continue;
          }

          if (i + 1 < item.length && !item[i + 1][j]) {
            const copy = copyBoard(item);
            swap(copy, i, j, i + 1, j);
            q.push(copy);
          }

          if (i - 1 >= 0 && !item[i - 1][j]) {
            const copy = copyBoard(item);
            swap(copy, i, j, i - 1, j);
            q.push(copy);
          }
          
          if (j + 1 < item[i].length && !item[i][j + 1]) {
            const copy = copyBoard(item);
            swap(copy, i, j, i, j + 1);

            q.push(copy);
          }

          if (j - 1 >= 0 && !item[i][j - 1]) {
            const copy = copyBoard(item);
            swap(copy, i, j, i, j - 1);
            q.push(copy);
          } 
        }
      }
    }

    step++;
  }

  return minStep === Number.POSITIVE_INFINITY ? -1 : minStep;
};

// console.log(slidingPuzzle([[1,2,3],[4,0,5]]));
console.log(slidingPuzzle([[1,2,3],[0,0,4]]));
// console.log(slidingPuzzle([[4,1,2],[5,0,3]]));

