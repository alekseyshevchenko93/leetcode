const assert = require('assert');

const addBinary = function (a, b) {
  const maxLen = Math.max(a.length, b.length);

  a = a.padStart(maxLen, '0');
  b = b.padStart(maxLen, '0');

  a = a.split('').reverse().map(Number);
  b = b.split('').reverse().map(Number);


  const results = [];
  let carry = 0;

  while (a.length && b.length) {
    const left = a.shift();
    const right = b.shift();

    const leftRightSum = left ^ right;

    const digit = leftRightSum ^ carry; // push
    const newCarry = leftRightSum & carry;
    carry = (left & right) ^ (leftRightSum & carry)

    results.push(digit);
  }

  if (carry) {
    results.push(carry);
  }


  return results.reverse().join('');
};

addBinary('11', '1');
addBinary('11', '11');
addBinary('1010', '1011');
// assert.equal(addBinary('11', '1'), 100);