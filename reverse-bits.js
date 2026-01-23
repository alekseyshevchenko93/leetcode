const assert = require('assert');

const reverseBits = (num) => {
  let res = 0;
  let i = 0;

  while (i < 32) {
    const lastBit = 1 & num;
    
    res = res << 1;
    res = res | lastBit;
    num = num >> 1
    i++
  }

  return res;
}

// console.log(reverseBits(14));
console.log(reverseBits(43261596));
// console.log('00000010100101000001111010011100');
// console.log((43261596).toString(2), 'input');
// console.log('00111001011110000010100101', 'answer');
// console.log((964176192).toString(2));