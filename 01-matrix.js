const updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  const q = [];
  const visited = new Set();

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!mat[i][j]) {
        q.push([i, j]);
      } else {
        // mat[i][j] = '#';
      }
    }
  }

  while (q.length) {
    const [i, j] = q.shift();
    const key = `${i},${j}`;
    visited.add(key);

    for (let direction of directions) {
      const [dx, dy] = direction;

      const newX = i + dx;
      const newY = j + dy;

      const newKey = `${newX},${newY}`;

      // if (newX < 0 || newY < 0 || newX >= m || newY >= n || !mat[newX][newY] || visited.has(key)) {
      if (newX < 0 || newY < 0 || newX >= m || newY >= n || visited.has(newKey) || mat[newX][newY] === 0) {
        continue;
      }

      mat[newX][newY] = mat[i][j] + 1;

      q.push([newX, newY]);
    }
  }

  return mat;

  // return result;
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));