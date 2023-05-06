const assert = require('assert');

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node1 = new ListNode(1);
const node2 = new ListNode(4);
const node3 = new ListNode(3);
const node4 = new ListNode(2);
const node5 = new ListNode(5);
const node6 = new ListNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const node7 = new ListNode(1);

const partition = function (head, x) {
  let leHead = new ListNode(0);
  let gteHead = new ListNode(0);
  let leTail = leHead;
  let gteTail = gteHead;

  let current = head;

  while (current) {
    const { val } = current;

    if (val < x) {
      leTail.next = current;
      leTail = current;
    } else {
      gteTail.next = current;
      gteTail = current;
    }

    current = current.next;
  }

  leTail.next = null;
  gteTail.next = null;

  leHead = leHead.next;
  gteHead = gteHead.next;

  if (leHead) {
    leTail.next = gteHead;
    return leHead;
  }

  return gteHead;
};

assert.equal(JSON.stringify(partition(node1, 3)), '{"val":1,"next":{"val":2,"next":{"val":2,"next":{"val":4,"next":{"val":3,"next":{"val":5,"next":null}}}}}}');
assert.equal(JSON.stringify(partition(node7, 1)), '{"val":1,"next":null}');
