const node1 = { val: 2 };
const node2 = { val: 4 };
const node3 = { val: 3 };

node1.next = node2;
node2.next = node3;

const p1 = { val: 5 };
const p2 = { val: 6 };
const p3 = { val: 4 };

p1.next = p2;
p2.next = p3;

const d1 = { val: 9 };
const d2 = { val: 9 };
const d3 = { val: 9 };
const d4 = { val: 9 };
const d5 = { val: 9 };

d1.next = d2;
d2.next = d3;
d3.next = d4;
d4.next = d5;

const s1 = { val: 9 };
const s2 = { val: 9 };

s1.next = s2;

function iterate(node) {
  while (node) {
    node = node.next;
  }
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function addTwoNumbers(node1, node2) {
  const dummy = new ListNode();
  let current = dummy;
  let remaining = 0;
  let carry = 0;

  while (node1 && node2) {
    const sum = node1.val + node2.val + carry;

    carry = Math.floor(sum / 10);
    remaining = sum % 10;

    current.next = new ListNode(remaining);
    current = current.next;

    node1 = node1.next;
    node2 = node2.next;
  }

  let n = node1 || node2;

  while (n) {
    const val = n.val + carry;

    carry = Math.floor(val / 10);
    remaining = val % 10;

    current.next = new ListNode(remaining);
    current = current.next;

    n = n.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}

iterate(addTwoNumbers(d1, s1));