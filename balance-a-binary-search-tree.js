
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var balanceBST = function(root) {
  const values = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    
    if (node.left) {
      traverse(node.left);
    }
    
    values.push(node.val);

    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(root);

  function constructBalancedBST(values) {
    if (!values.length) {
      return;
    }

    if (values.length === 1) {
      return new TreeNode(values[0])
    }

    const middle = Math.floor(values.length / 2);
    const left = values.slice(0, middle);
    const right = values.slice(middle + 1);
    
    const node = new TreeNode(values[middle]);

    node.left = constructBalancedBST(left);
    node.right = constructBalancedBST(right);

    return node;
  }

  return constructBalancedBST(values);
};

const node1 = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: {
        val: 4
      }
    }
  }
}

const node2 = {
  val: 50,
  left: {
    val: 20,
    left: {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 3
        }
      }
    },
    right: {
      val: 35,
      right: {
        val: 45
      }
    }
  },
  right: {
    val: 90,
    right: {
      val: 120,
      right: {
        val: 150,
        right: {
          val: 180,
          right: {
            val: 200,
            left: {
              val: 195
            },
            right: {
              val: 220,
              right: {
                val: 250
              }
            }
          }
        }
      }
    }
  }
};

balanceBST(node1)