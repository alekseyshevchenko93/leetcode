function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

const p1 = new TreeNode(2);
const p2 = new TreeNode(3);
const p3 = new TreeNode(1);

p1.left = p2;
p2.left = p3;

function getNodes(root) {
  const nodes = [];
  const q = [root];

  while (q.length) {
    const node = q.shift();

    nodes.push(node);

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right)
    }
  }

  return nodes;
}

function maxHeight(node) {
  let max = 0;

  const dfs = (n, curMax = 0) => {
    if (!n) {
      max = Math.max(max, curMax);
      return;
    }

    dfs(n.left, curMax + 1);
    dfs(n.right, curMax + 1);
  };

  dfs(node);

  return max;
}

function getDiameter(node) {
  const left = node.left ? maxHeight(node.left) : 0;
  const right = node.right ? maxHeight(node.right) : 0;

  // console.log('left, right', node.val, left, right);

  return left + right;
}

const diameterOfBinaryTree = function (root) {
  const nodes = getNodes(root);
  let max = 0;

  for (let node of nodes) {
    max = Math.max(max, getDiameter(node));
    // console.log(node.val, getDiameter(node));
  }

  return max;
};

console.log(diameterOfBinaryTree(p1));