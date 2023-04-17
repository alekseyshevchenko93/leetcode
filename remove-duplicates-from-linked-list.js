var deleteDuplicates = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;

    if (!prev) {
      prev = current;
      current = current.next;
      continue;
    }

    if (prev && prev.val !== current.val) {
      prev.next = current;
      prev = current;
    }

    current = current.next;
  }

  prev.next = null;

  return head;
};

// 1 1 4 4

const node1 = { val: 1 };
const node2 = { val: 1 };
const node3 = { val: 4 };
const node4 = { val: 4 };

node1.next = node2;
node2.next = node3;
node3.next = node4;


console.log(deleteDuplicates(node1));
