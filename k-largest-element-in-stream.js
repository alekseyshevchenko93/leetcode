const assert = require('assert');

var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = [];

  if (nums.length) {
    nums.forEach((num) => {
      this.add(num);
    })
  }
};

KthLargest.prototype.add = function (val) {
  const min = this.arr[0];

  if (min === undefined) {
    this.arr.push(val);
    return this.arr[0];
  }

  if (this.arr.length === this.k && val <= min) {
    return min;
  }

  if (this.arr.length === this.k) {
    this.arr.shift();
  }

  let i = 0;

  while (this.arr[i] <= val) {
    i++;
  }

  this.arr.splice(i, 0, val);

  return this.arr[0];
};

// const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// assert.equal(kthLargest.add(3), 4);   // return 4
// assert.equal(kthLargest.add(5), 5);   // return 5
// assert.equal(kthLargest.add(10), 5);  // return 5
// assert.equal(kthLargest.add(9), 8);   // return 8
// assert.equal(kthLargest.add(4), 8);   // return 8


const kthLargest = new KthLargest(2, [0]);
assert.equal(kthLargest.add(-1), -1);
// assert.equal(kthLargest.add(-2), -2);
// // assert.equal(kthLargest.add(10), 5);  // return 5
// // assert.equal(kthLargest.add(9), 8);   // return 8
// // assert.equal(kthLargest.add(4), 8);   // return 8