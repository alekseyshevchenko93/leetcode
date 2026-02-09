class Node {
  constructor(id) {
    this.id = id;
    this.paths = [];
  }
}
const minCost = function(n, edges) {
  console.log(n, edges);
  
  const nodes = new Array(n).fill().map((_, i) => {
    return new Node(i)
  });

  const idToNodeMap = nodes.reduce((memo, node) => {
    memo[node.id] = node;
    return memo;
  }, {});

  for (let edge of edges) {
    const [node1, node2, w] = edge;

    idToNodeMap[node1].paths.push({
      id: node2,
      w
    })

    idToNodeMap[node2].paths.push({
      id: node1,
      w: w * 2
    })
  }

  let minCost = Number.POSITIVE_INFINITY;

  function traverse(node, currentCost = 0, visited = new Set) {
    if (visited.has(node.id)) {
      return;
    }

    if (node.id === n - 1) {
      visited.add(node.id);
      minCost = Math.min(minCost, currentCost);
      return;
    }

    if (currentCost >= minCost) {
      return;
    }

    const { id, paths } = node;
    visited.add(id);
    console.log('node', node.id, node.paths);

    for (let path of paths) {
      traverse(idToNodeMap[path.id], currentCost + path.w, new Set([...visited]))
    }
  }

  traverse(nodes[0]);

  // console.log(JSON.stringify(nodes, null, 2));
  
  const result = minCost === Number.POSITIVE_INFINITY ? -1 : minCost;
  console.log('result', result);

  return result;
};

// minCost(4,  [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]);
// minCost(4, [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]);
// minCost(2, [[0,1,13],[1,0,1]]);
minCost(4, [[2,3,25],[2,1,18],[3,1,2]]);