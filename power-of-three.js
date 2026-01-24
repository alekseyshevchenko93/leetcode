const assert = require('assert');

const isPowerOfThree = function(n) {
  // n = Math.abs(n);

  while (n > 1) {
    n = (n / 3);
  }

  return n === 1;
};


// assert(!isPowerOfThree(26));
// assert(isPowerOfThree(27));
// assert(isPowerOfThree(3));
// assert(!isPowerOfThree(4));
// assert(!isPowerOfThree(0));
assert(!isPowerOfThree(-1));
// assert(isPowerOfThree(-27));

