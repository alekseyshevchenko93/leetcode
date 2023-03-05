
const node1 = { val: 5 };
const node2 = { val: 3 };
const node3 = { val: 6 };
const node4 = { val: 2 };
const node5 = { val: 4 };
const node6 = { val: 1 };
const node7 = { val: 8 };
const node8 = { val: 7 };
const node9 = { val: 9 };

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node3.right = node7;
node7.left = node8;
node7.right = node9;

function rangeSumBST(root, low, high) {
  let sum = 0;

  function getRangeSum(node, low, high) {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    if (node.val >= low && node.left) {
      getRangeSum(node.left, low, high);
    }

    if (node.val <= high && node.right) {
      getRangeSum(node.right, low, high);
    }
  }

  getRangeSum(root, low, high);

  return sum;
}