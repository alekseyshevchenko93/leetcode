const assert = require('assert');

const hammingWeight = function (n) {
  let bits = 0;

  while (n > 0) {
    bits += n & 1
    n = n >>> 1;
  }

  return bits;
};

assert.equal(hammingWeight(0b00000000000000000000000000001011), 3);
assert.equal(hammingWeight(0b00000000000000000000000010000000), 1);
assert.equal(hammingWeight(0b11111111111111111111111111111101), 31);
assert.equal(hammingWeight(0b00000000000000000000000000001011), 3)