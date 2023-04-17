const assert = require('assert');

function getHash(board) {
  const m = board.length;
  const n = board[0].length;
  const hash = {};

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = board[i][j];

      if (!item) {
        return hash;
      }

      hash[item] = [i, j];
    }
  }
}

const alphabetBoardPath = function (target) {
  const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
  const hash = getHash(board);

  target = 'a' + target;
  let result = '';

  for (let i = 0; i < target.length - 1; i++) {
    const current = target[i];
    const next = target[i + 1];

    const currentCoords = hash[current];
    const nextCoords = hash[next];
    let [x1, y1] = currentCoords;
    const [x2, y2] = nextCoords;

    while (x1 !== x2 || y1 !== y2) {
      if (x1 < x2 && board[x1 + 1][y1]) {
        result += 'D';
        x1++;
        continue;
      }

      if (x1 > x2 && board[x1 - 1][y1]) {
        result += 'U';
        x1--;
        continue;
      }

      if (y1 < y2) {
        result += 'R';
        y1++;
        continue;
      }

      result += 'L';
      y1--;
    }

    result += '!';
  }

  return result;
};

assert.equal(alphabetBoardPath('leet'), 'DDR!UURRR!!DDD!');
assert.equal(alphabetBoardPath('code'), 'RR!DDRR!UUL!R!');
assert.equal(alphabetBoardPath('zdz'), 'DDDDD!UUUUURRR!DDDDLLLD!');