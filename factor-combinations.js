const assert = require('assert');

function factorCombinations(num, current = []) {
  if (num === 1) {
    return [current];
  }

  let combinations = [];

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) {
      const newCombinations = factorCombinations(num / i, current.concat(i));
      combinations = combinations.concat(newCombinations);
    }
  }
  
  if (current.length) {
    combinations.push(current.concat(num));
  }

  return combinations;
}

assert.deepEqual(factorCombinations(8), [ [ 2, 2, 2 ], [ 2, 4 ] ]);
assert.deepEqual(factorCombinations(20), [ [ 2, 2, 5 ], [ 2, 10 ], [ 4, 5 ] ]);