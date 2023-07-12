const assert = require('assert');

function getK(s) {
  let i = 3;

  while (i) {
    const res = +s.slice(-i);

    if (!Number.isNaN(res)) {
      return res;
    }

    i--;
  }

  return 0;
}

const decodeString = function (s) {
  const st = [''];
  let cur = '';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === '[') {
      st.push(cur);
      cur = '';
    } else if (c === ']') {
      if (cur.length) {
        st.push(cur);
        cur = '';
      }

      const elem = st.pop();
      const last = st.pop();
      const number = getK(last);

      const res = last.slice(0, -number.toString().length) + new Array(number).fill(elem).join('');

      st.push(res);
    } else {
      st[st.length - 1] += c;
    }
  }

  return st.pop();
};

assert.equal(getK('k2'), 2)
assert.equal(getK('k20'), 20)
assert.equal(getK('sdsk200'), 200)
assert.equal(getK('200'), 200)
assert.equal(getK('20'), 20)
assert.equal(getK('2'), 2)

assert.equal(decodeString('3[a2[c]]'), 'accaccacc');
assert.equal(decodeString('2[abc]3[cd]ef'), 'abcabccdcdcdef');
assert.equal(decodeString('3[a]2[bc]'), 'aaabcbc');
assert.equal(decodeString('abc'), 'abc');
assert.equal(decodeString('a2[c]'), 'acc');
assert.equal(decodeString('10[leetcode]'), new Array(10).fill('leetcode').join(''));
assert.equal(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'), 'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef');

