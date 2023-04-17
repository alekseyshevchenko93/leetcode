var removeElements = function (head, val) {
  while (head && head.value === val) {
    head = head.next;
  }

  let current = head;
  let prev = current;

  while (current) {
    if (current.value === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return head;
};

const node1 = { value: 1 };
const node2 = { value: 1 };
const node3 = { value: 2 };
const node4 = { value: 1 };
const node5 = { value: 1 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node3.next = node4;
node4.next = node5;

console.log(removeElements(node1, 1));