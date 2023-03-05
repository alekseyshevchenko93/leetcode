'use strict';

const zero = { val: 0 };
const node1 = { val: 7 };
const node2 = { val: 3 };
const node3 = { val: 15 };
const node4 = { val: 9 };
const node5 = { val: 20 };

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

function serialize(node) {
  const arr = [node.val];
  
  function traverse(node) {
    if (!node) {
      return;
    }

    arr.push(node.left ? node.left.val : null);
    arr.push(node.right ? node.right.val : null);

    traverse(node.left);
    traverse(node.right);
  }

  traverse(node);
  
  const str = JSON.stringify(arr);
  
  return str;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function deserialize(data) {
  const arr = JSON.parse(data);
  console.log(data);
  
  function buildTree(index, arr) {
    const val = arr[index];

    if (val === null || val === undefined) {
      return null;
    }

    const node = new TreeNode(val);

    node.left = buildTree(index * 2 + 1, arr);
    node.right = buildTree(index * 2 + 2, arr);

    return node;
  }

  return buildTree(0, arr);
}

console.log(deserialize(serialize(zero)));