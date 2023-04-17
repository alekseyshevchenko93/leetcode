
const spiralOrder = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const visited = new Set();

  let d = 0;
  let i = -1;
  let j = -1;

  const directions = {
    RIGHT: 0,
    BOTTOM: 1,
    LEFT: 2,
    TOP: 3
  };

  const results = [];

  while (visited.size !== m * n) {
    const direction = d % 4;
    d++;

    switch (direction) {
      case directions.RIGHT:
        i++;
        j++;
        while (j < m) {
          const key = `${i},${j}`;

          if (visited.has(key)) {
            break;
          }

          visited.add(key);
          results.push(matrix[i][j]);
          j++;
        }

        break;
      case directions.BOTTOM:
        j--;
        i++;
        while (i < n) {
          const key = `${i},${j}`;

          if (visited.has(key)) {
            break;
          }

          visited.add(key);
          results.push(matrix[i][j]);
          i++;
        }

        break;
      case directions.LEFT:
        j--;
        i--;
        while (j >= 0) {
          const key = `${i},${j}`;

          if (visited.has(key)) {
            break;
          }

          visited.add(key);
          results.push(matrix[i][j]);
          j--;
        }

        break;
      case directions.TOP:
        i--;
        j++;
        while (i >= 0) {
          const key = `${i},${j}`;

          if (visited.has(key)) {
            break;
          }

          visited.add(key);
          results.push(matrix[i][j]);
          i--;
        }

        break;
    }

    console.log('direction', direction, results);
  }

  return results;
};

// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13,14,15,16]]));
// console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));

