const isPowerOfFour = function(num) {
  let countBits = 0;
  let countPosBits = 0;
  let posBitIsEven = true;

  while (num) {
    countBits++;
    
    if (countPosBits > 1) {
      return false;
    }

    let bit = 1 & num;

    if (bit) {
      countPosBits++;
      posBitIsEven = countBits & 1;
    }

    num = num >> 1;
  }

  console.log('here', countBits, countPosBits, posBitIsEven);

  return Boolean(countPosBits === 1 && posBitIsEven);
};

console.log(isPowerOfFour(16));