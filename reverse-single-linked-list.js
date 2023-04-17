const node1 = { val: 1 };
const node2 = { val: 2 };
const node3 = { val: 3 };
const node4 = { val: 4 };

node1.next = node2;
node2.next = node3;
node3.next = node4;

function iterate(node) {
  while (node) {
    console.log(node);
    node = node.next;
  }
}

function reverseSingleLinkedList(node) {
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}

function reverseSingleLinkedListRecursively(node, prev = null) {
  if (!node) {
    return prev;
  }

  const next = node.next;
  node.next = prev;

  return reverseSingleLinkedListRecursively(next, node);
}