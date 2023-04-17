/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const s1 = [];
  const s2 = [];

  for (let c of s) {
    if (c === '#') {
      s1.pop();
    } else {
      s1.push(c);
    }
  }

  for (let c of t) {
    if (c === '#') {
      s2.pop();
    } else {
      s2.push(c);
    }
  }

  while (s1.length || s2.length) {
    if (s1.pop() !== s2.pop()) {
      return false;
    }
  }

  return true;
};

console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('bxj##tw', 'bxj###tw'));

