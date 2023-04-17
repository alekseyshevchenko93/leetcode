'use strict';

const util = require('util');
const str = 'test....$.javascript govno.....ohuenen(net).....';

// b b b . . . 
// 0 1 2 3 4 5

// 3 - 1 = 2
// 4 - 3 = 1

// f = i - (counter) - (counter - 1)

function prettify(str) {
  let counter = 0,
      newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const symbol = str[i];

    if (symbol === '.') {
      counter++;
    } else {
      if (!counter) {
        newStr = `${symbol}${newStr}`;
      } else {
        counter--;
      }
    }
  }

  return newStr;
}

function prettify2(str) {
  let counter = 0;
  let map = {};
  
  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (c === '.') {
      counter++;
      const pos = i - counter - (counter - 1);

      if (pos >= 0) {
        map[pos] = null;
      }
    } else {
      map[i] = c;
      counter = 0;
    }
  }

  const newStr = Object.values(map).filter((v) => v).join('');

  console.log(newStr);
}

// мама мыла раму | раму мыла маму

// function reverseMama(str) {
//   let words = [], 
//     spaces = [],
//     inWord = false,
//     word = '';

//   for (let c of str) {
//     if (c === ' ') {
//       if (inWord) {
//         words.push(word);
//         inWord = false;
//         word = '';
//       }
//       spaces.push(c);
//     } else {
//       inWord = true;
//       word += c;
//     }
//   }

//   if (inWord) {
//     words.push(word);
//   }

//   words.reverse();
//   let newStr = '';
//   inWord = false;

//   for (let c of str) {
//     if (c === ' ') {
//       if (inWord) {
//         newStr += words.shift();
//         inWord = false; 
//       }
//       newStr += spaces.pop();
//     } else {
//       inWord = true;
//     }
//   }

//   if (inWord) {
//     newStr += words.shift();
//   }

//   console.log(str);

//   return newStr;
// }

function reverseMama(str) {
  const words = str.match(/\S+/g).reverse();
  const template = str.replace(/\S+/g, '%s')
  return util.format(template, ...words);
}

  // const spaces = str.match(/\s/g);

  // let newStr = '';

  // for (let c of str) {
  //   if (c === ' ') {
  //     newStr += spaces.pop();
  //   } else {
  //     newStr += words.pop();
  //   }
  // }

//   console.log(formatted);
// }

console.log(prettify2(str));
// console.log(reverseMama('     мама мыла  раму'));
// console.log(reverseMama('     мама мыла  раму'));