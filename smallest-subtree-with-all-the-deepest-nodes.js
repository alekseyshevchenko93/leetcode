
const subtreeWithAllDeepest = function(node) {
  if (!node) {
    return null;
  }

  const helper = (node) => {
    if (!node) {
      return {
        depth: 0,
        node: null
      }
    }

    if (!node.left && !node.right) {
      return {
        depth: 1, 
        node
      };
    }

    const { depth: depth1, node: node1 } = helper(node.left);
    const { depth: depth2, node: node2 } = helper(node.right);

    if (depth1 === depth2) {
      return {
        depth: depth1 + 1,
        node
      };
    }

    return depth1 > depth2 
      ? { depth: depth1 + 1, node: node1 }
      : { depth: depth2 + 1, node: node2 };
  };

  const result = helper(node);

  return result.node;
}


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
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 2
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

const node3 = {
  val: 0,
  left: {
    val: 1,
    right: {
      val: 2
    }
  },
  right: {
    val: 3
  }
}
console.log('result', subtreeWithAllDeepest(node3));