const node1 = { val: 1 };
const node2 = { val: 2 };
const node3 = { val: 3 };
const node4 = { val: 4 };
const node5 = { val: 5 };
const node6 = { val: 6 };

node1.left = node2;
node1.right = node5;

node2.left = node3;
node2.right = node4;

node5.right = node6;

function traversePreOrder(node, listNode) {
  if (!node) {
    return listNode;
  }

  const newListNode = new TreeNode(node.val);
  listNode.right = newListNode;

  listNode = traversePreOrder(node.left, newListNode)
  listNode = traversePreOrder(node.right, listNode)

  return listNode;
}

function flatten(node) {
  const listHead = new TreeNode(0);
  traversePreOrder(node, listHead);

  return listHead.right;
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function iterate(node) {
  while (node) {
    console.log(node.val);
    node = node.right;
  }
}

const head = flatten(node1);
iterate(head);