const node1 = { val: 5 };
const node2 = { val: 3 };
const node3 = { val: 6 };
const node4 = { val: 2 };
const node5 = { val: 4 };
const node6 = { val: 1 };

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;

// const node1 = { val: 1 };
// const node2 = { val: 2 };
// node1.right = node2;

// const node1 = { val: 3 };
// const node2 = { val: 1 };
// const node3 = { val: 4 };
// const node4 = { val: 2 };

// node1.left = node2;
// node1.right = node3;
// node1.right = node3;
// node2.right = node4;

function kthSmallest(root, k, kSmallest = []) {
  if (!root) {
    return;
  } 

  if (root.left && kSmallest.length < k) {
    kthSmallest(root.left, k, kSmallest);
  }
  
  if (kSmallest.length < k) {
    kSmallest.push(root.val);
  }
  
  if (root.right && kSmallest.length < k) {
    kthSmallest(root.right, k, kSmallest);
  }

  return kSmallest[k - 1];
}

const r = kthSmallest(node1, 3);
console.log(r);