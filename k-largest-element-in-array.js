const assert = require('assert');


var findKthLargest = function (nums, k) {
  const arr = [];

  nums.forEach((num) => {
    const min = arr[0];

    if (min === undefined) {
      return arr.push(num);
    }

    if (arr.length === k && num < min) {
      return;
    }

    if (arr.length === k) {
      arr.shift();
    }

    let i = 0;

    while (arr[i] <= num) {
      i++;
    }

    arr.splice(i, 0, num);
  });

  return arr[0];
};


assert.deepEqual(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);