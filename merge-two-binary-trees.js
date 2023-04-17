/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }

  const node = root1 && root2 ? new TreeNode(root1.val + root2.val) : (root1 || root2);

  if (root1 || root2) {
    node.left = root1 && root2
      ? mergeTrees(root1.left, root2.left)
      : mergeTrees((root1 || root2).left);

    node.right = root1 && root2
      ? mergeTrees(root1.right, root2.right)
      : mergeTrees((root1 || root2).right);
  }

  return node;
};