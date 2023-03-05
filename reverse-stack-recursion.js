'use strict';

const s = [1,2,3,4,5];

function reverseStack(s) {
  if (!s.length) {
    return;
  }

  const item = s.pop();
  reverseStack(s);
  s.push(item);
}

reverseStack(s);
console.log(s);
/*
1
2
3
4
5
*/