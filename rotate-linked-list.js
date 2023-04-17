// const rotateRight = function (node, k) {
//   let head = node;
//   let current = node;
//   let length = 0;

//   while (current) {
//     current = current.next;
//     length++;
//   }

//   if (k === length) {
//     return node;
//   }

//   k = k > length ? k % length : k;

//   current = head;
//   // k--;

//   while (k--) {
//     current = current.next;
//   }

//   // 1 2 3 4
//   // 3 4 1 2

//   const prevHead = head;
//   const newHead = current.next ? current.next : current;

//   if (!current.next) {
//     prevHead.next = null;
//   } else {
//     current.next = null;
//   }
//   head = newHead;

//   current = newHead;

//   while (current.next) {
//     current = current.next;
//   }

//   current.next = prevHead;

//   return newHead;
// };

const rotateRight = (head, k) => {
  if (!k) return head;
  if (!head) return null;

  var current = head;
  let length = 0;

  while (current.next) {
    current = current.next;
    length++;
  }

  let tail = current;
  length++;

  current.next = head;
  k = k > length ? k % length : k;

  const pos = length - k;

  for (i = 0; i < pos; i++) {
    current = current.next;
  }

  const next = current.next;
  current.next = null;
  head = next;

  return head;
}

const node1 = { value: 1 };
const node2 = { value: 2 };
// const node3 = { value: 3 };
// const node4 = { value: 4 };
// const node5 = { value: 5 };
// const node6 = { value: 7 };
// const node7 = { value: 5 };

node1.next = node2;
// node2.next = node3;
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

const h = rotateRight(node1, 1);
traverse(h);

