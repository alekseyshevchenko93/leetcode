const assert = require('assert');

const BOARD_LEN = 8;
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

function knight(start, finish) {
  let step = 0;

  const q = [start];
  const visited = new Set;

  while (q.length) {
    const items = q.slice();

    for (let item of items) {
      q.shift();

      if (visited.has(item)) {
        continue;
      }

      if (item === finish) {
        return step;
      }
      
      visited.add(item);
      
      const [x,y] = item.split('');
      
      for (let [movex, movey] of KNIGHT_MOVES) {
        const newx = x.charCodeAt(0) + movex;
        const newy = +y + movey;
        const key = `${String.fromCharCode(newx)}${newy}`;

        if (newx >= 97 && newx <= 104 && newy >= 1 && newy <= BOARD_LEN && !visited.has(key)) {
          q.push(key)
        }
      }
    }

    step++;
  }

  return step;
}

const tt = [
  ['a1', 'c1', 2], 
  ['a1', 'f1', 3], 
  ['a1', 'f3', 3], 
  ['a1', 'f4', 4], 
  ['a1', 'f7', 5],
  ['g2', 'e6', 2]
];

for (let [start, finish, result] of tt) {
  assert.equal(knight(start, finish), result);
}