const assert = require('assert');

var isValid = function (s) {
  const stack = [];

  for (let c of s) {
    if (['{', '(', '['].includes(c)) {
      stack.push(c);
    } else {
      const last = stack.pop();

      if (c === ')' && last !== '(') {
        return false;
      }
      if (c === '}' && last !== '{') {
        return false;
      }
      if (c === ']' && last !== '[') {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

assert.equal(isValid('()[]{}'), true);