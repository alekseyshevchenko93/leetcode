const findCircleNum = function(matrix) {
  const n = matrix.length;

  const visited = new Set;
  const provinces = [];

  const q = [];
  let currentProvince = [];

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }

    visited.add(i);
    currentProvince.push(i);
    q.push(i);

    while (q.length) {
      const item = q.shift();

      for (let j = 0; j < n; j++) {
        if (j !== item && matrix[item][j] && !visited.has(j)) {
          q.push(j);
          visited.add(j);
          currentProvince.push(j);
        }
      }
    }

    if (currentProvince.length) {
      provinces.push(currentProvince);
    }

    currentProvince = [];
  }

  return provinces.length;
};

const matrix1 = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 1, 1]
];

console.log(findCircleNum(matrix1));