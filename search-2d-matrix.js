// const matrix = [[1]];
const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
// const target = 1;
const target = 5;

var searchMatrix = function (matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  console.log(m, n);

  const arr = matrix.reduce((memo, row) => {
    return memo.concat(row);
  });

  const index = binarySearch(arr, target);
  console.log('index', index);
  
  const x = Math.floor(index / m);
  const y = index % m;

  console.log('coords x/y', x, y);
  return index !== -1;
};

const binarySearch = function (arr, target) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    const midpoint = Math.floor(start + (end - start) / 2);
    if (arr[midpoint] === target) {
      return midpoint
    } else if (arr[midpoint] > target) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }

  return -1;
}


console.log(searchMatrix(matrix, target));