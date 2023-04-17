const deleteDuplicates = function (node) {
  const hash = {};

  let current = node;

  while (current) {
    hash[current.value] = hash[current.value] ? hash[current.value] + 1 : 1;
    current = current.next;
  }

  const toDelete = Object.entries(hash).reduce((memo, [key, value]) => {
    if (value > 1) {
      memo[key] = value;
    }

    return memo;
  }, {});

  current = node;
  let head, current2;

  while (current) {
    if (!toDelete[current.value]) {
      if (!head) {
        head = current;
        current2 = current;
      } else {
        current2.next = current;
        current2 = current;
      }
    }

    current = current.next;
  }
  current2.next = null;

  return head;
};

const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 2 };
// const node4 = { value: 3 };
// const node5 = { value: 4 };
// const node6 = { value: 4 };
// const node7 = { value: 5 };

node1.next = node2;
node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;

function traverse(node) {
  while (node) {
    console.log(node);
    node = node.next;
  }
}

const h = deleteDuplicates(node1);
traverse(h);

