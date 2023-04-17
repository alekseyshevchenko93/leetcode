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
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) {
    return 0;
  }

  let totalSum = 0;

  const dfs = (root, currentNumber = 0) => {
    if (!root) {
      return;
    }

    if (!root.left && !root.right) {
      // console.log(root.val, currentNumber);
      totalSum += currentNumber * 10 + root.val;
      return;
    }

    const newCurrentNumber = currentNumber * 10 + root.val;

    dfs(root.left, newCurrentNumber);
    dfs(root.right, newCurrentNumber);
  };

  dfs(root);

  return totalSum;
};