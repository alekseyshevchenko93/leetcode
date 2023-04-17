const assert = require('assert');

var romanToInt = function (s) {
  const symbolsMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  };

  const sortedKeys = Object.keys(symbolsMap).sort((a, b) => b.length - a.length);
  let number = 0;

  while (s) {
    for (let ch of sortedKeys) {
      const regexp = new RegExp(`^${ch}`);
      const match = s.match(regexp);

      if (match) {
        const decimal = symbolsMap[ch];
        number += decimal;
        s = s.slice(ch.length)
        break;
      }
    }
  }

  console.log(number);

  return number;
};

assert.equal(romanToInt('LVIII'), 58);