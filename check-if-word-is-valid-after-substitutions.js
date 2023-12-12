const isValid = function(s) {
  let cur = s, last;

  while (cur !== last) {
    last = cur;
    cur = cur.replace(/abc/g, '');
    // console.log('here', cur);
  }

  return !cur;
  // return !t;
};

console.log(isValid('aabcbc'));
console.log(isValid('abcabcababcc'));
console.log(isValid('abccba'));

