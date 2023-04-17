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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const paths = [];

  if (!root) {
    return [];
  }

  const dfs = (root, currentSum = 0, path = []) => {
    if (!root) {
      return;
    }

    if (!root.left && !root.right && currentSum + root.val === targetSum) {
      paths.push(path.concat(root.val));
    }

    const newPath = path.concat(root.val);

    dfs(root.left, currentSum + root.val, newPath);
    dfs(root.right, currentSum + root.val, newPath);
  };

  dfs(root);

  return [...paths];
};