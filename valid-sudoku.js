const assert = require('assert');

const EMPTY_CEIL = '.';
const BOX_SIZE = 9;
const SUBBOX_SIZE = BOX_SIZE / 3;

function isValidRow(row) {
  const set = new Set;

  for (let item of row) {
    if (item !== EMPTY_CEIL && set.has(item)) {
      return false;
    }

    set.add(item);
  }

  return true;
}

function getColumns(board) {
  const columns = new Array(BOX_SIZE).fill();
  
  for (let i = 0; i < BOX_SIZE; i++) {
    columns[i] = new Array(BOX_SIZE).fill();
  }

  for (let i = 0; i < BOX_SIZE; i++) {
    for (let j = 0; j < BOX_SIZE; j++) {
      columns[j][i] = board[i][j];
    }
  }

  return columns;
}

function getSubboxes(rows) {
  const subboxes = [];

  for (let k = 0; k < SUBBOX_SIZE; k++) {
    for (let i = 0; i < SUBBOX_SIZE; i++) {
      let subbox = [];

      for (let j = 0; j < SUBBOX_SIZE; j++) {
        subbox.push(rows[k * SUBBOX_SIZE + j].slice(SUBBOX_SIZE * i, SUBBOX_SIZE * i + SUBBOX_SIZE));
      }

      subboxes.push(subbox);
    }
  }

  return subboxes;
}

function isValidSubbox(subbox) {
  const row = subbox.reduce((memo, item) => {
    return memo.concat(item);
  }, []);

  return isValidRow(row);
}

const isValidSudoku = function(board) {
  if (board.some((row) => !isValidRow(row))) {
    return false;
  }

  const columns = getColumns(board);

  if (columns.some((column) => !isValidRow(column))) {
    return false;
  }

  const subboxes = getSubboxes(board);

  if (subboxes.some((subbox) => !isValidSubbox(subbox))) {
    return false;
  }

  return true;
};

// assert.equal(isValidSudoku([['1', '1']]), false);
// assert.equal(isValidSudoku([['1', '.']]), true);

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));