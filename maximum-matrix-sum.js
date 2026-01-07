const maxMatrixSum = function(matrix) {
  const n = matrix.length;
  let countNegatives = 0;
  let minAbs = Number.POSITIVE_INFINITY;
  let sumAbs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] < 0) {
        countNegatives++;
      }
      minAbs = Math.min(minAbs, Math.abs(matrix[i][j]));
      sumAbs += Math.abs(matrix[i][j]);
    }
  }

  console.log('neg', countNegatives);
  console.log('min abs', minAbs);
  console.log('sum', sumAbs);

  if (!(countNegatives % 2)) {
    return sumAbs;
  }
  
  return sumAbs - 2 * minAbs;
};

console.log(maxMatrixSum([[1,-1],[-1,1]]));
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]));
