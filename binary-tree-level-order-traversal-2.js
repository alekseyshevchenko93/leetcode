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

function levelOrderTraversalBfs(root) {
  const result = [];
  const q = [root];

  while (q.length) {
    const level = [];
    const nodes = q.splice(0, q.length);

    nodes.forEach((node) => {
      q.shift();
      level.push(node);

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    });

    result.push(level.map(({ val }) => val));
  }

  console.log(result);

  return result;
}

levelOrderTraversalBfs(node1);
