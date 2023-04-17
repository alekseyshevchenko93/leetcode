const node1 = { val: 3 };
const node2 = { val: 1 };
const node3 = { val: 5 };
const node4 = { val: 0 };
const node5 = { val: 2 };
const node6 = { val: 4 };
const node7 = { val: 6 };

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

function dfs(node, sum, count, level) {
  if (!node) {
    return;
  }

  sum[level] = (sum[level] || 0) + node.val;
  count[level] = (count[level] || 0) + 1;

  if (node.left) {
    dfs(node.left, sum, count, level + 1)
  }

  if (node.right) {
    dfs(node.right, sum, count, level + 1)
  }
}

function averageOfLevelsDfs(root) {
  const sum = {}, count = {};
  const level = 1;

  dfs(root, sum, count, level);

  const result = Object.entries(sum).map(([level, value]) => {
    console.log(level, value, count[level]);
    return value / count[level];
  });

  console.log('result dfs', result);
  return result;
}

function averageOfLevelsBfs(root) {
  const q = [root];
  const results = [];

  while (q.length) {
    let sum = 0, count = 0;
    const temp = q.slice();

    for (let i = 0; i < temp.length; i++) {
      const node = q.shift();
      sum += node.val;
      count++;

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }

    console.log('level', results.length, sum, count);
    results.push(sum / count);
  }

  console.log('result bfs', results);q
}

averageOfLevelsDfs(node1);
averageOfLevelsBfs(node1);
