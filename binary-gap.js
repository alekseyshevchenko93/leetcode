const assert = require('assert');

const binaryGap = function(num) {
  let lastOnePos = null;
  let i = 0;
  let maxDistance = 0;

  while (num) {
    const bit = num & 1;
    console.log('bit', bit);

    if (bit) {
      if (lastOnePos !== null) {
        maxDistance = Math.max(maxDistance,  i - lastOnePos);
      }

      lastOnePos = i;
    }

    num >>= 1;
    i++;
  }

  console.log('max distance', maxDistance);
  return maxDistance;
};

// assert(binaryGap(9) == 2);
// assert(binaryGap(8) == 0);
assert(binaryGap(22), 2);
