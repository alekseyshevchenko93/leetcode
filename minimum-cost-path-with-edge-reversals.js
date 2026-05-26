class Node {
  constructor(id) {
    this.id = id;
    this.paths = [];
  }
}

class PQ {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();

    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex].distance <= this.heap[index].distance) break;

      [this.heap[parentIndex], this.heap[index]] =
        [this.heap[index], this.heap[parentIndex]];

      index = parentIndex;
    }
  }

  _bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (
        left < length &&
        this.heap[left].distance < this.heap[smallest].distance
      ) {
        smallest = left;
      }

      if (
        right < length &&
        this.heap[right].distance < this.heap[smallest].distance
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];

      index = smallest;
    }
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

  const visited = new Set;
  const distances = {};
  const heap = new PQ;

  heap.push({ id: 0, distance: 0 });

  distances[0] = 0;

  for (let i = 1; i < n; i++) {
    distances[i] = Number.POSITIVE_INFINITY;
  }

  while (heap.size()) {
    const node = heap.pop();
    
    visited.add(node.id);
    
    const { id, distance } = node;
    
    if (id === n - 1) {
      return distance;
    }
    
    const v = idToNodeMap[id];
    const { paths } = v;
    
    for (let path of paths) {
      if (!visited.has(path.id)) {
        heap.push({ id: path.id, distance: distances[id] + path.w });
        
        if (distances[id] + path.w < distances[path.id]) {
          distances[path.id] = distances[id] + path.w;
        }
      }
    }
  }

  const result = distances[n - 1];
  console.log('result', result);

  return result;
};


// minCost(4,  [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]);
minCost(3, [[2,0,12],[1,0,5],[0,1,15]]);
// minCost(4, [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]);
// minCost(2, [[0,1,13],[1,0,1]]);
// minCost(4, [[2,3,25],[2,1,18],[3,1,2]]);