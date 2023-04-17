const assert = require('assert');

function isVowel(c) {
  return c.match(/[aeioyu]/i);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp;
}

function reverseVowels(str) {
  const arr = str.split('');
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (!isVowel(arr[i])) {
      i++;
    } else if (!isVowel(arr[j])) {
      j--;
    } else {
      swap(arr, i++, j--);
    }
  }

  return arr.join('');
}

assert(isVowel('a'));
assert(!isVowel('b'));

assert(reverseVowels('hello') === 'holle');
assert(reverseVowels('aA') === 'Aa');