'use strict';

const { map } = require("core-js/core/array");

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

function dfs(node, map) {
  if (!node) {
    return null;
  }

  const { val, neighbors } = node;
  const clonedNode = map.has(node)
    ? map.get(node)
    : new Node(val);

  map.set(node, clonedNode);

  clonedNode.neighbors = neighbors.map((node) => {
    return map.get(node) || dfs(node, map);
  });

  return clonedNode;
}

const cloneGraph = function (node) {
  const map = new Map();
  return dfs(node, map);
};

const n2 = new Node(2);
const n3 = new Node(3);
const n1 = new Node(1, [n2,n3]);

console.log(cloneGraph(n1) === n1);