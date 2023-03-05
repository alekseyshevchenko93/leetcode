const rotate = function (matrix) {
  console.log(matrix);

  const n = matrix.length;
  let temp;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(matrix[i][j]);
    }
  }

};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


