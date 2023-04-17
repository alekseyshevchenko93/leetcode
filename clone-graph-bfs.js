'use strict';

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

function bfs(node, map) {
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
  if (!node) {
    return null;
  }

  const map = new Map();
  const q = [node];
  map.set(node, new Node(node.val));

  while (q.length) {
    const node = q.shift();

    const neighbors = node.neighbors.map((neighbor) => {
      if (!map.has(neighbor)) {
        q.push(neighbor);
        map.set(neighbor, new Node(neighbor.val));
      }

      return map.get(neighbor);
    });


    map.get(node).neighbors = neighbors;
  }

  return map.get(node);
};

const n2 = new Node(2);
const n3 = new Node(3);
const n1 = new Node(1, [n2,n3]);

console.log(cloneGraph(n1));