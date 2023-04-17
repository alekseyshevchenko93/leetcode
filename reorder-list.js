function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


const reorderList = function (head) {
  let current = head;
  const arr = [];

  while (current) {
    arr.push(current);
    current = current.next;
  }

  const middle = Math.floor(arr.length / 2);

  const stack1 = arr.slice(0, middle);
  const stack2 = arr.slice(middle);

  const dummy = new ListNode(0);
  const newHead = dummy;
  let tail = dummy;

  while(stack1.length || stack2.length) {
    const item1 = stack1.shift();
    const item2 = stack2.pop();

    if (item1) {
      item1.next = null;
      tail.next = item1;
      tail = item1;
    }

    if (item2) {
      item2.next = null;
      tail.next = item2;
      tail = item2;
    }
  }

  traverse(newHead);

  return newHead.next;
};

function traverse(node) {
  while (node) {
    console.log(node.val)
    node = node.next;
  }
}

reorderList(node1);