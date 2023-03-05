const node1 = { val: 5 };
const node2 = { val: 1 };
const node3 = { val: 4 };
const node4 = { val: 3 };
const node5 = { val: 6 };

node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.left = node4;
node3.right = node5;

// const node1 = { val: 5 };
// const node2 = { val: 4 };
// const node3 = { val: 6 };
// const node4 = { val: 3 };
// const node5 = { val: 7 };

// node1.left = node2;
// node1.right = node3;
// node3.left = node4;
// node3.right = node5;


function isValidBST(root) {
  const inorder = [];

  function helper(root) {
    if (!root) {
      return;
    }

    if (root.left) {
      helper(root.left);
    }

    inorder.push(root.val);

    if (root.right) {
      helper(root.right);
    }
  }

  helper(root);

  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i - 1] >= inorder[i]) {
      return false;
    }
  }

  return true;
}


const r = isValidBST(node1);
console.log(r);