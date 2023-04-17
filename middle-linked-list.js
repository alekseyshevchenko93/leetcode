var middleNode = function (head) {
  let p1 = head;
  let p2 = head;

  while (p1.next) {
    p1 = p1.next;

    if (!p1.next) {
      return p2.next;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};

const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 3 };
const node4 = { value: 4 };
const node5 = { value: 5 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const t = middleNode(node1);
console.log(t)
