const directions = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0]
];

const floodFill = function (image, sr, sc, color) {
  const m = image.length;
  const n = image[0].length;

  const originalColor = image[sr][sc];
  const visited = new Set();

  const dfs = (x, y) => {
    const key = `${x}${y}`;

    if (visited.has(key)) {
      return;
    }

    visited.add(key);
    image[x][y] = color;

    for (direction of directions) {
      const [dx, dy] = direction;

      const newX = x + dx;
      const newY = y + dy;

      if (newX >= m || newX < 0 || newY >= n || newY < 0) {
        continue;
      }

      // console.log('newx', newX, m, newX > m);
      const newCell = image[newX][newY];

      if (newCell !== originalColor) {
        continue;
      }

      dfs(newX, newY);
    }
  };

  dfs(sr, sc);

  console.log(image);

  return image;
};

// floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);
floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0);