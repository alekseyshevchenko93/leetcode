const assert = require('assert');

function sortStack(stack) {
  const temp = [];

  while (stack.length) {
    const item = stack.pop();

    if (!temp.length || temp[temp.length - 1] <= item) {
      temp.push(item);
    } else {
      let i = 0;

      while (temp[temp.length - 1] > item) {
        stack.push(temp.pop());
        i++;
      }

      stack.push(item);

      while (i--) {
        temp.push(stack.pop());
      }
    }
  }

  return temp;
}

assert.deepEqual(sortStack([34, 3, 31, 98, 92, 23]), [3, 23, 31, 34, 92, 98]);
assert.deepEqual(sortStack([3, 5, 1, 4, 2, 8]), [1, 2, 3, 4, 5, 8]);