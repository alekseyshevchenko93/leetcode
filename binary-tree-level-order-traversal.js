'use strict';

const assert = require('assert');

const node1 = { val: 3 };
const node2 = { val: 9 };
const node3 = { val: 20 };
const node4 = { val: 15 };
const node5 = { val: 7 };

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

function levelOrderTraversal(root) {
  const nodes = [];
  const queue = [];

  if (!root) {
    return nodes;
  }
  
  queue.push({
    level: 0,
    node: root
  });

  while (queue.length) {
    const { level, node } = queue.shift();

    if (Array.isArray(nodes[level])) {
      nodes[level].push(node.val);
    } else {
      nodes[level] = [node.val];
    }

    if (node.left) {
      queue.push({ level: level + 1, node: node.left });
    }
    if (node.right) {
      queue.push({ level: level + 1, node: node.right });
    }
  }

  console.log(nodes);
}

levelOrderTraversal(node1);
