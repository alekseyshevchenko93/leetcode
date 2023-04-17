const assert = require("assert");

class Heap {
  constructor(items = null, compare = null) {
    if (items != null && !Array.isArray(items))
      throw new Error('Invalid array.');

    if (compare != null && typeof compare !== 'function')
      throw new Error('Invalid compare function.');

    this.items = items || [];
    this.compare = compare || this.__defaultCompare;

    this.heapify();
  }

  heapify() {
    for (let i = Math.floor(this.size - 1); i >= 0; --i) {
      this.heapifyDown(i);
    }
  }

  push(item) {
    this.items.push(item);
    this.heapifyUp(this.size - 1);
  }

  pop() {
    if (this.size === 0)
      return null;

    this.__swap(0, this.size - 1);
    const min = this.items.pop();
    this.heapifyDown(0);
    return min;
  }

  peek() {
    return this.size > 0 ? this.items[0] : null;
  }

  clear() {
    this.items.splice(0, this.size);
  }

  get size() {
    return this.items.length;
  }

  heapifyDown(index) {
    const child_left_index = index * 2 + 1;
    const child_right_index = index * 2 + 2;

    if (child_left_index > this.size - 1)
      return;

    let min_index = child_left_index;
    if (
      child_right_index < this.size &&
      this.compare(this.items[child_left_index], this.items[child_right_index]) > 0) {
      min_index = child_right_index;
    }

    if (this.compare(this.items[index], this.items[min_index]) > 0) {
      this.__swap(index, min_index);
      this.heapifyDown(min_index);
    }
  }

  heapifyUp(index) {
    const parent_index = Math.floor((index - 1) / 2);
    if (
      parent_index >= 0 &&
      this.compare(this.items[parent_index], this.items[index]) > 0) {
      this.__swap(index, parent_index);
      this.heapifyUp(parent_index);
    }
  }

  __defaultCompare(x, y) {
    if (x === y)
      return 0;

    return x > y ? 1 : -1;
  }

  __swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
}

class MedianFinder {
  constructor() {
    this.minHeap = new Heap(null, (a, b) => a - b);
    this.maxHeap = new Heap(null, (a, b) => b - a);
  }
  addNum(num) {
    const minHeapSize = this.minHeap.size;
    const maxHeapSize = this.maxHeap.size;

    if (num < this.maxHeap.peek()) {
      this.maxHeap.push(num);

      if (Math.abs(this.maxHeap.size - this.minHeap.size) > 1) {
        this.minHeap.push(this.maxHeap.pop());
      }
    } else {
      this.minHeap.push(num);

      if (Math.abs(this.maxHeap.size - this.minHeap.size) > 1) {
        this.maxHeap.push(this.minHeap.pop());
      }
    }
  }
  findMedian() {
    const isOdd = (this.minHeap.size + this.maxHeap.size) % 2;

    if (isOdd) {
      const minHeapSize = this.minHeap.size;
      const maxHeapSize = this.maxHeap.size;

      return minHeapSize > maxHeapSize ? this.minHeap.peek() : this.maxHeap.peek();
    }

    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  }
}

const mf = new MedianFinder
// for (let i = 1; i <= 2; i++) {
//   mf.addNum(i)
// }

// mf.addNum(1)
// console.log(mf.findMedian());
// mf.addNum(2)
// console.log(mf.findMedian());
// mf.addNum(3)
// console.log(mf.findMedian());
// mf.addNum(4)
// console.log(mf);
// console.log(mf.findMedian());
// mf.addNum(4)
// console.log(mf.findMedian());
// mf.addNum(5)
// console.log(mf.findMedian());

// -3 -2 - 1
mf.addNum(-1);
// console.log(mf.findMedian());
mf.addNum(-2);
// console.log(mf.findMedian());
mf.addNum(-3);
console.log(mf.findMedian());
// // console.log(mf);




