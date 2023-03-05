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
 * @return {boolean}
 */

const getTreeHeight = (root) => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
};

var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  const l = isBalanced(root.left);
  const r = isBalanced(root.right);

  const lh = getTreeHeight(root.left);
  const rh = getTreeHeight(root.right);

  if (Math.abs(lh - rh) > 1) {
    return false;
  }

  return l && r;
};