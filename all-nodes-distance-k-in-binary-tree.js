
const distanceK = function(root, target, k) {
  const valToParentMap = {};
  const results = [];
  let parent = null;

  function iterate(node) {
    if (!node) {
      return;
    }

    valToParentMap[node.val] = parent;

    parent = node;
    iterate(node.left);
    parent = node;
    iterate(node.right);
  }

  iterate(root);


  function searchDistance(node, distance, visited) {
    if (!node || visited.has(node)) {
      return;
    }

    visited.add(node);

    if (!distance) {
      results.push(node.val);
      return;
    }

    // check left child
    searchDistance(node.left, distance - 1, visited);

    // check right child
    searchDistance(node.right, distance - 1, visited);

    // check parent
    searchDistance(valToParentMap[node.val], distance - 1, visited);
  }

  searchDistance(target, k, new Set)

  return results;
};

const node1 = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2,
      left: {
        val: 7
      },
      right: {
        val: 4
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0
    },
    right: {
      val: 8
    }
  }
}

const node2 = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3
    },
    right: {
      val: 2
    }
  }
}

// distanceK(node1, node1.left, 2)
distanceK(node2, node2.left.right, 1)