const getRow = function (index) {
  let lastRow = [];
  let currentRow = 0;

  for (let i = currentRow + 1; i <= index + 1; i++) {
    const newRow = new Array(i).fill(1);

    for (let j = 1; j < i - 1; j++) {
      newRow[j] = lastRow[j - 1] + lastRow[j];
    }

    lastRow = newRow;
  }

  return lastRow;
};


console.log(getRow(3));