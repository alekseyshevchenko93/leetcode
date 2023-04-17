'use strict';

const assert = require('assert');

function findMostFrequentCharacter(arr) {
  const len = arr.length;

  arr.forEach((elem) => {
    arr[elem % len] += len;
  });

  let max = Number.NEGATIVE_INFINITY, maxIndex;

  console.log(len, arr);
  arr.forEach((item, index) => {
    if (item > max) {
      maxIndex = index;
      max = item;
    }
  });

  console.log('max index', maxIndex);

  return maxIndex;
}



const arr1 = [0,1,1,2,2,2,3];

assert.equal(findMostFrequentCharacter(arr1), 2);
// console.log(maxRepeating(arr1, 7, 7));