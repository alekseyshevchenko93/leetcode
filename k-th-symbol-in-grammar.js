const kthGrammar = function (n, k) {
  let prev = ['0'];

  for (let i = 1; i < n; i++) {
    let newRow = '';

    for (let item of prev) {
      if (item === '0') {
        newRow += '01';
      } else {
        newRow += '10';
      }
    }

    prev = newRow;
    console.log(i + 1, prev);
  }

  // console.log('last', rows[rows.length - 1]);
  return prev[k - 1]
  // console.log(rows);
};

// console.log(kthGrammar(1, 1));
// console.log(kthGrammar(2, 1));
// console.log(kthGrammar(2, 2));
console.log(kthGrammar(10, 1));