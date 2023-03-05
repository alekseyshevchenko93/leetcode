const setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();

  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        console.log(i, j);
        const colIdx = j;
        const rowIdx = i;

        rows.add(rowIdx);
        cols.add(colIdx);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  // console.log(matrix);

  return matrix;
  // console.log(rows, cols);
};

const m1 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

console.log(setZeroes(m1));