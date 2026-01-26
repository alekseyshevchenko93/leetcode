const hasAlternatingBits = function(n) {
  let lastBit = null;

  while (n) {
    const bit = n & 1;
  
    console.log('bit', bit);

    if (bit === lastBit) {
      console.log('false');
      return false;
    }

    lastBit = bit;

    n = n >> 1;
  }

  console.log('true');
  return true;
};

hasAlternatingBits(10);
hasAlternatingBits(5);