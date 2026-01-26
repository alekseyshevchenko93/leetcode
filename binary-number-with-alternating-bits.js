const hasAlternatingBits = function(n) {
  let lastBit = null;

  while (n) {
    const bit = n & 1;
  
    if (bit === lastBit) {
      return false;
    }

    lastBit = bit;

    n = n >> 1;
  }

  return true;
};

hasAlternatingBits(10);
hasAlternatingBits(5);