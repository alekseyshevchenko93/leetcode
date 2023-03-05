const getNewCoords = (n,i,j) => {
  let x = j, y = n - i - 1;
  return [x, y];
};

const rotate = function (matrix) {
  const n = matrix.length;
  let temp;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let [x, y] = getNewCoords(n, i, j);
      let prev = matrix[i][j];

      while (x !== i || y !== j) {
        temp = matrix[x][y];
        matrix[x][y] = prev;
        prev = temp;

        const newCoords = getNewCoords(n, x, y);

        x = newCoords[0];
        y = newCoords[1];
      }

      matrix[x][y] = prev;
    }
  }

  return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
console.log(rotate([[1,2], [3,4]]));


