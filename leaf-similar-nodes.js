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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

  const dfs = (node, leafs = []) => {
    if (!node) {
      return leafs;
    }

    if (!node.left && !node.right) {
      leafs.push(node.val);
    }

    if (node.left) {
      dfs(node.left, leafs);
    }

    if (node.right) {
      dfs(node.right, leafs);
    }

    return leafs;
  }

  const arr1 = dfs(root1);
  const arr2 = dfs(root2);
  console.log(arr1, arr2);

  return arr1.toString() === arr2.toString();
};