function TreeNode(val, left, right) {
this.val = (val === undefined ? 0 : val)
this.left = (left === undefined ? null : left)
this.right = (right === undefined ? null : right)
}

let preorderIndex = 0;

function build({ preorder, start, end, valueToIndexMap }) {
  if (start > end) {
    return;
  }

  console.log(preorderIndex);
  const value = preorder[preorderIndex];
  const index = valueToIndexMap[value];

  preorderIndex++;

  const node = new TreeNode(value);

  node.left = build({ preorder, start, end: index - 1, valueToIndexMap });
  node.right = build({ preorder, start: index + 1, end, valueToIndexMap });

  return node;
}

const buildTree = function (preorder, inorder) {
  let preorderIndex = 0;

  const valueToIndexMap = inorder.reduce((memo, value, index) => {
    memo[value] = index;
    return memo;
  }, {});

  const start = 0;
  const end = preorder.length - 1;

  const node = build({ preorderIndex, preorder, start, end, valueToIndexMap });
  console.log('here', node);
  return node;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);