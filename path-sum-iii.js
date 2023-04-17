/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return 0;
  }

  const nodes = [];

  const dfs = (root) => {
    if (!root) {
      return;
    }

    nodes.push(root);

    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);

  let numPaths = 0;

  const dfs2 = (root, currentSum = 0) => {
    if (!root) {
      return;
    }


    if (currentSum + root.val === targetSum) {
      numPaths++;
    }

    dfs2(root.left, currentSum + root.val);
    dfs2(root.right, currentSum + root.val);
  };


  for (let node of nodes) {
    dfs2(node);
  }

  return numPaths;
};