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

const backspaceCompareTwoPointers = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  let c1 = 0;
  let c2 = 0;

  while (i >= 0 || j >= 0) {
    console.log('in while');
    if (s[i] === '#') {
      c1++;
      i--;
      continue;
    }

    if (t[j] === '#') {
      c2++;
      j--;
      continue;
    }

    if (c1) {
      c1--;
      i--;
      continue;
    }

    if (c2) {
      c2--;
      j--;
      continue;
    }

    const s1 = s[i];
    const t1 = t[j];

    if (s[i] !== t[j]) {
      return false;
    }

    i--;
    j--;
  }

  if (i > 0 || j > 0) {
    return false;
  }

  return true;
};

assert(backspaceCompareTwoPointers('ab#c', 'ad#c'));
assert(backspaceCompareTwoPointers('ab##', 'c#d#'));
assert.equal(backspaceCompareTwoPointers('a#c', 'b'), false);
assert(backspaceCompareTwoPointers('xywrrmp', 'xywrrmu#p'));
