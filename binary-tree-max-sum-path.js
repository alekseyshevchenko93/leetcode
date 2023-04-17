function findMaxSum(node, currentSum = 0) {
  if (!node) {
    return 0;
  }

  const sum1 = findMaxSum(node.left, currentSum + node.value);
  const sum2 = findMaxSum(node.right, currentSum + node.value);

  const maxSum = Math.max(sum1, sum2);

  return node.value + maxSum;
}
  // function traverse(node, currentPath, currentSum) {
  //   if (!node.left && !node.right) {
  //     console.log('path', node.value, currentPath.map(({ value }) => value));
  //     if (currentSum > maxSum) {
  //       maxSumPath = currentPath;
  //       maxSum = currentSum;
  //     }
  //   }

  //   if (node.left) {
  //     console.log('value', node.left.value)
  //     traverse(node.left, [...currentPath, node.left], currentSum + node.left.value);
  //   }

  //   if (node.right) {
  //     traverse(node.right, [...currentPath, node.right], currentSum + node.right.value);
  //   }
  // }

  // traverse(node1, [node1], node.value);

  // return maxSum;
// }

// function findMaxSum(node) {
//   let maxSum = 0, maxSumPath = [];

//   function traverse(node, currentPath, currentSum) {
//     if (!node.left && !node.right) {
//       console.log('path', node.value, currentPath.map(({ value }) => value));
//       if (currentSum > maxSum) {
//         maxSumPath = currentPath;
//         maxSum = currentSum;
//       }
//     }

//     if (node.left) {
//       console.log('value', node.left.value)
//       traverse(node.left, [...currentPath, node.left], currentSum + node.left.value);
//     }

//     if (node.right) {
//       traverse(node.right, [...currentPath, node.right], currentSum + node.right.value);
//     }
//   }

//   traverse(node1, [node1], node.value);

//   return [
//     maxSum,
//     maxSumPath
//   ];
// }

const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 1 };
const node4 = { value: 7 };
const node5 = { value: 9 };
const node6 = { value: 9 };
const node7 = { value: 5 };
const node8 = { value: 2 };
const node9 = { value: 7 };

node1.left = node2;
node1.right = node6;

node2.left = node3;
node2.right = node4;

node3.left = node5;

node6.left = node7;
node6.right = node8;

node7.left = node9;

const maxSum = findMaxSum(node1);
console.log('max sum', maxSum);