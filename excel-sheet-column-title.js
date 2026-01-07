// {
//   '0': 'A',
//   '1': 'B',
//   '2': 'C',
//   '3': 'D',
//   '4': 'E',
//   '5': 'F',
//   '6': 'G',
//   '7': 'H',
//   '8': 'I',
//   '9': 'J',
//   '10': 'K',
//   '11': 'L',
//   '12': 'M',
//   '13': 'N',
//   '14': 'O',
//   '15': 'P',
//   '16': 'Q',
//   '17': 'R',
//   '18': 'S',
//   '19': 'T',
//   '20': 'U',
//   '21': 'V',
//   '22': 'W',
//   '23': 'X',
//   '24': 'Y',
//   '25': 'Z'
// }

const assert = require('assert');
// AY -> 51
// AZ -> 52 
// BA -> 53
var convertToTitle = function(columnNumber) {
  const map = new Array(26).fill().reduce((memo, item, i) => {
    memo[i] = String.fromCharCode(65 + i);
    return memo;
  }, {});

  const results = [];

  while (columnNumber) {
    const sm = (columnNumber - 1) % 26;
    const c = map[sm];

    results.unshift(c);

    const newColNumber = Math.floor((columnNumber - 1) / 26)

    columnNumber = newColNumber;
  }

  console.log('res', results);
  return results.join('');
};

assert.equal(convertToTitle(1), 'A');
assert.equal(convertToTitle(2), 'B');
assert.equal(convertToTitle(26), 'Z');
assert.equal(convertToTitle(27), 'AA')
assert.equal(convertToTitle(28), 'AB')
assert.equal(convertToTitle(52), 'AZ')
assert.equal(convertToTitle(53), 'BA')
assert.equal(convertToTitle(701), 'ZY')
assert.equal(convertToTitle(801), 'ADU');
assert.equal(convertToTitle(2147483647), 'FXSHRXW');