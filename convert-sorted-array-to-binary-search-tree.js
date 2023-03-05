function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
 
const sortedArrayToBST = function (nums) {
  const dfs = (nums) => {
    if (!nums.length) {
      return null;
    }

    const mid = Math.floor(nums.length / 2);

    const node = new TreeNode(nums[mid]);

    node.left = dfs(nums.slice(0, mid));
    node.right = dfs(nums.slice(mid + 1));

    return node;
  };

  return dfs(nums, 0);
};

console.log(sortedArrayToBST([1,2,3,4,5,6,7]));
// console.log(sortedArrayToBST([1, 3]));
// console.log(sortedArrayToBST([-10,-3,0,5,9]));
