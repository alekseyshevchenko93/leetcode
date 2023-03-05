/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
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

var sortedListToBST = function (head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return sortedArrayToBST(arr);
};