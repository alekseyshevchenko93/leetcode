function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
const node4 = new TreeNode(3);
const node5 = new TreeNode(4);
const node6 = new TreeNode(4);
const node7 = new TreeNode(3);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;


// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(2);
// const node4 = new TreeNode(3);
// const node5 = new TreeNode(3);

// node1.left = node2;
// node1.right = node3;

// node2.right = node4;
// node3.right = node5;

function isSymmetric(root) {
  const q = [root];

  while (q.length) {
    let row = q.slice().map((item) => item ? item.val : item)
    let len = row.length;
    let i = 0, j = row.length - 1;
    
    while (i <= j) {
      if (row[i] !== row[j]) {
        return false;
      }

      i++;
      j--;
    }

    while (len--) {
      const node = q.shift();

      if (!node) {
        continue;
      }

      q.push(node.left);
      q.push(node.right);
    }
  }

  return true;
}

// console.log(node1);
console.log(isSymmetric(node1));