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

node2.right = node5;
node3.right = node4;

const rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const q = [root];

  while (q.length) {
    let len = q.length;
    const lastItem = q[len - 1];
    result.push(lastItem.val);

    while (len) {
      const item = q.shift();

      if (item.left) {
        q.push(item.left);
      }

      if (item.right) {
        q.push(item.right);
      }

      len--;
    }
  }

  return result;
};

console.log(rightSideView(node1));