
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

function increasingBST(root) {
  const arr = [];
  traverse(root, arr);
  const node = constructBST(arr);

  console.log(JSON.stringify(node, null, 2));
  return node;
}

function traverse(node, arr) {
  if (!node) {
    return;
  }

  if (node.left) {
    traverse(node.left, arr);
  }

  arr.push(node);

  if (node.right) {
    traverse(node.right, arr);
  }
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function constructBST(arr) {
  const node = arr.shift();

  if (!node) {
    return null;
  }

  node.left = null;
  node.right = constructBST(arr);

  return node;
}

increasingBST(node1);

