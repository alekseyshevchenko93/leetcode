const generate = function (numRows) {
  const results = [];
  let currentRow = 0;
  
  for (let i = currentRow + 1; i <= numRows; i++) {
    const lastRow = results[results.length - 1];
    const newRow = new Array(i).fill(1);

    for (let j = 1; j < i - 1; j++) {
      newRow[j] = lastRow[j - 1] + lastRow[j];
    }

    results.push(newRow);
  }

  return results;
};


console.log(generate(5));