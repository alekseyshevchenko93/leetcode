const assert = require('assert');

const countBits = function (n) {
  const arr = [];

  for (let i = 0; i <= n;i ++) {
    let bits = 0;
    let d = i;

    while (d) {
      const bit = d & 0b1;
      bits += bit;
      d = d >> 1;
    }

    arr.push(bits);
  }

  return arr;
};

assert.deepEqual(countBits(2), [0, 1, 1]);
assert.deepEqual(countBits(5), [0, 1, 1, 2, 1, 2]);