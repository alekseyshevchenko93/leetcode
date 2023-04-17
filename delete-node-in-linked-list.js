const deleteNode = function (node) {
  let current = node,
    prev;

  while (current.next) {
    current.value = current.next.value;
    prev = current;
    current = current.next;
  }

  // console.log('last', current, prev)

  prev.next = null;
};

function deleteNode2(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

const node1 = { value: 4 };
const node2 = { value: 5 };
const node3 = { value: 1 };
const node4 = { value: 9 };
// const node5 = { value: 5 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;

function traverse(node) {
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

deleteNode2(node2);
traverse(node1);
// console.log('1', node1);
// console.log('2', node2);
// console.log('3', node3);
// console.log('4', node4);
