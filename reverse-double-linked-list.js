
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

function reverseDoubleLinkedList(node) {
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    node.prev = next;

    prev = node;
    node = next;
  }

  return prev;
}

function reverseDoubleLinkedListRecursively(node, prev = null) {
  if (!node) {
    return prev;
  }

  const next = node.next;
  node.next = prev;
  node.prev = next;

  return reverseDoubleLinkedList(next, node);
}