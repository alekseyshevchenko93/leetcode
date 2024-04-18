const assert = require('assert');

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

function getMoves(position, size, visited) {
  const moves = [];

  const [x, y] = position;

  for (let move of KNIGHT_MOVES) {
    const [movex, movey] = move;

    const newx = x + movex;
    const newy = y + movey;

    if (newx >= 0 && newx < size && newy >= 0 && newy < size && !visited.has(`${newx}:${newy}`)) {
      moves.push([newx, newy]);
    }
  }

  return moves;
}

function warnsdorff(moves, size, visited) {
  const updMoves = [];

  for (let move of moves) {
    const score = getMoves(move, size, visited).length;
    updMoves.push({ move, score });
  }

  return updMoves.sort((a, b) => a.score - b.score).map(({ move }) => move);
}

function knights_tour(start, size, visited = new Set, path = [start]) {
  visited.add(start.join(':'));

  if (visited.size === size * size) {
    return path;
  }
  
  const rawMoves = getMoves(start, size, visited)
  const moves = warnsdorff(rawMoves, size, visited);
      
  for (let move of moves) {
    const res = knights_tour(move, size, new Set(visited), path.concat([move]));
    
    if (res) {
      return res;
    }
  }
}

console.log(knights_tour([0,0], 6));
// for (let [start, finish, result] of tt) {
//   assert.equal(knight(start, finish), result);
// }