const assert = require('assert');

const formatStr = (s) => {
  let newStr = [];

  for (let c of s) {
    if (c === '#') {
      newStr.pop();
      continue;
    }

    newStr.push(c);
  }

  return newStr.join('');
}

const backspaceCompare = function (s, t) {
  return formatStr(s) === formatStr(t);
};

assert(backspaceCompare('ab#c', 'ad#c'));
assert(backspaceCompare('ab##', 'c#d#'));