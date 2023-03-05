const node1 = { val: 1 };
const node2 = { val: 0 };
const node3 = { val: 1 };
const node4 = { val: 0 };
const node5 = { val: 1 };
const node6 = { val: 0 };
const node7 = { val: 1 };

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

function sumRootToLeaf(root) {
  let sum = 0;

  function dfs(node, number) {
    if (!node) {
      return sum;
    }

    if (!node.left && !node.right) {
      return sum += parseInt(number + node.val, 2);
    }

    dfs(node.left, number + node.val);
    dfs(node.right, number + node.val);
  }
  
  dfs(root, '');

  return sum;
}

console.log(sumRootToLeaf(node1));