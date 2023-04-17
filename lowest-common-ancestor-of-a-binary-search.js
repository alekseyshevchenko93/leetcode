
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const node1 = new TreeNode(6);
const node2 = new TreeNode(2);
const node3 = new TreeNode(0);
const node4 = new TreeNode(4)
const node5 = new TreeNode(3);
const node6 = new TreeNode(5);
const node7 = new TreeNode(8)
const node8 = new TreeNode(7);
const node9 = new TreeNode(9);

node1.left = node2;
node1.right = node7;

node2.left = node3;
node2.right = node4;

node4.left = node5;
node4.right = node6;

node7.left = node8;
node7.right = node9;

const n1 = new TreeNode(2);
const n2 = new TreeNode(1);

n1.left = n2;

function lowestCommonAncestor(root, p, q) {
  let pNode = root;
  let qNode = root;

  const arr1 = [];
  const arr2 = [];

  while (pNode && pNode.val !== p.val) {
    arr1.push(pNode);

    if (p.val < pNode.val) {
      pNode = pNode.left;
    } else {
      pNode = pNode.right;
    }
  }

  arr1.push(pNode);

  while (qNode && qNode.val !== q.val) {
    arr2.push(qNode);

    if (q.val < qNode.val) {
      qNode = qNode.left;
    } else {
      qNode = qNode.right;
    }
  }

  arr2.push(qNode);

  let ancestor = arr1[0];
  let i = 1;

  while (i < arr1.length && i < arr2.length) {
    if (arr1[i].val !== arr2[i].val) {
      break;
    }

    ancestor = arr1[i];
    i++;
  }

  return ancestor;
};

// lowestCommonAncestor(node1, node2, node4);
console.log(lowestCommonAncestor(n1, n2, n1));

