
// double linked list

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
// 1 2 3 4 -> 4 3 2 1

// 1. 2 next = 1, 1 prev = 2, 1 next = null
// 2. 3 next = 2, 2 prev = 3
// 3. 4 next = 3, 3 prev = 4, 4 prev = null

// 1. next = node.next
// 2. prev = node.prev

// 3. next.next = node
// 4. node.prev = next;

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

// console.log('node1', node4);
iterate(reverseDoubleLinkedListRecursively(node1));
