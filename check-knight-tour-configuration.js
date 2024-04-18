const KNIGHT_MOVES = [
  [1,-2],
  [2,-1],
  [2,1],
  [1,2],
  [-1,2],
  [-2,1],
  [-2,-1],
  [-1,-2]
];

const computeKey = (i, j) => `${i}:${j}`;

function getMoves(position, grid, visited) {
  const moves = [];
  const m = grid.length;
  const n = grid[0].length;
  const [x, y] = position;

  for (let move of KNIGHT_MOVES) {
    const [movex, movey] = move;
    const newx = x + movex;
    const newy = y + movey;
    const key = computeKey(newx, newy);

    if (!visited.has(key) && newx >= 0 && newx < m && newy >= 0 && newy < n) {
      moves.push([newx, newy]);
    }
  }

  return moves;
}

const checkValidGrid = function(grid) {
  let position = [0, 0];
  const n = grid.length;
  const visited = new Set;

  if (grid[0][0] !== 0) {
    return false;
  }

  for (let i = 0; i < n * n - 1; i++) {
    const moves = getMoves(position, grid, visited);
    const move = moves.find(([movex, movey]) => grid[movex][movey] === i + 1);
    
    if (!move) {
      return false;
    }

    const [movex, movey] = move;
    const key = computeKey(movex, movey);
    
    visited.add(key);

    position = move;
  }

  return true;
};

// console.log(checkValidGrid(
//   [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]
// ));

console.log(checkValidGrid([[0,3,6],[5,8,1],[2,7,4]]));