'use strict';

const assert = require('assert');

const node1 = { val: 7 };
const node2 = { val: 3 };
const node3 = { val: 15 };
const node4 = { val: 9 };
const node5 = { val: 20 };

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

class BSTIterator {
  constructor(root) {
    this.inOrder = [];
    this.buildInOrder(root);
    this.currentIndex = -1;
  }
  buildInOrder(root) {
    this.traverse(root);
  }
  hasNext() {
    return this.inOrder.length;
  }
  next() {
    return this.inOrder.shift();
  }
  traverse(node) {
    if (node.left) {
      this.traverse(node.left);
    }

    this.inOrder.push(node.val);

    if (node.right) {
      this.traverse(node.right);
    }
  }
}

const b = new BSTIterator(node1);

for (let i = 0; i <5; i++) {
  console.log(b.next());
}
// assert(b.hasNext(node1));
// assert.equal(b.next(), 7);
