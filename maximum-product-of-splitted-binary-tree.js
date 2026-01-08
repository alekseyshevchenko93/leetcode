const maxProduct = function(root) {
  const totalSum = getTotalSum(root);
  let maxProduct = Number.NEGATIVE_INFINITY;
  console.log('total', totalSum);

  const helper = (node) => {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return node.val
    }

    const sum1 = helper(node.left);
    const sum2 = helper(node.right);

    // const product1 = (node.val + sum1) * (totalSum - node.val - sum1);
    const product1 = (totalSum - sum2) * sum2;
    // const product2 = (node.val + sum2) * (totalSum - node.val - sum2);
    const product2 = (totalSum - sum1) * sum1;

    console.log('product 1:', node.val, sum1, sum2, product1, node.val + sum1, totalSum - node.val - sum1);
    console.log('product 2:', node.val, sum1, sum2, product2, node.val + sum2, totalSum - node.val - sum2);

    maxProduct = Math.max(maxProduct, product1, product2);

    return node.val + sum1 + sum2;
  };

  helper(root);

  return maxProduct % (Math.pow(10, 9) + 7);
};

function getTotalSum(node) {
  if (!node) {
    return 0;
  }

  if (!node.left && !node.right) {
    return node.val
  }

  const sum1 = getTotalSum(node.left);
  const sum2 = getTotalSum(node.right);

  return node.val + sum1 + sum2;
}

const node1 = { 
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6
    }
  }
};

const node2 = { 
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6
      }
    }
  }
};

const sum = maxProduct(node1);
console.log('result', sum);