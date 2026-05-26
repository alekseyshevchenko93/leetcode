const countSubmatrices = function(grid, k) {
  const m = grid.length;
  let n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        if (grid[i][j] <= k) {
          count++;
        }

        continue;
      }

      if (!j) {
        continue;
      }

      const sum = grid[i][j] + grid[i][j - 1];
  
      if (sum <= k && i == 0) {
        count++;
      }
      
      grid[i][j] = sum;
    }
    
    for (let p = 0; p < n && i > 0; p++) {
      const sum = grid[i - 1][p] + grid[i][p];

      if (sum > k) {
        n = p;
        break;
      }

      count++;
      grid[i][p] = sum;
    }
  }

  return count;
};

/*
2 9
3 10
8 5
3 8

k = 27
*/

function copyGrid(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const copy = new Array(m).fill().map(() => new Array(n).fill());

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      copy[i][j] = grid[i][j];
    }
  }

  return copy;
}

function sumMatrix(matrix) {
  let sum = 0;
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

function rotateMatrix(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rotated = new Array(n).fill();

  for (let i = 0; i < n; i++) {
    const v = [];

    
    for (let j = 0; j < m; j++) {
      v.push(grid[j][i])
    }

    rotated[i] = v;
  }

  return rotated;
}

// rotateMatrix([[7,6,3],[6,6,1]]);
/* sub-grids:

1x1 [0,0]

1x2 [0,0, 0,1]
1x2 [0,0, 1,0]

1x3 [0,0, 0,1 0,2]
1x3 [0,0, 1,0, 2,0]

2x2 [0,0, 0,1, 1,0, 1,1]

2x3 [0,0, 0,1, 1,0, 1,1, 0,2, 1,2]
2x3 [0,0, 0,1, 1,0, 1,1, 2,0, 2,1]

3x3 [вся матрица]
*/


// countSubmatrices([[7,2,9],[1,5,0],[2,6,6]], 20);
// countSubmatrices([[7,6,3],[6,6,1]], 18);
// countSubmatrices([[1]], 18);
countSubmatrices([[2,9],[3,10],[8,5],[3,8]], 27)
