const assert = require('assert');

var removeNthFromEnd = function (head, n) {
  let left = right = head;

  if (!head.next) {
    return null;
  }
  
  while (n-- && right) {
    right = right.next;
  }

  if (!right) {
    return head.next;
  }

  while (right.next) {
    right = right.next;
    left = left.next;
  }

  console.log(left.value, right.value);

  left.next = left.next.next;
  
  return head;
};

const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
const node4 = { value: 4 };
const node5 = { value: 5 };
const node6 = { value: 6 };
node1.next = node2;
// node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const result = removeNthFromEnd(node1, 1);
// assert.equal(result.value, 1);
// console.log('result', JSON.stringify(result, null, 2));