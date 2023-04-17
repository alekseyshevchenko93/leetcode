const partition = function (s) {
  const palindroms = [];

  const dfs = (s, m = []) => {
    if (!s) {
      palindroms.push(m);
      return;
    }

    for (let i = 1; i <= s.length; i++) {
      const slice = s.slice(0, i);
      // console.log(s, slice);
      // console.log(m);
      const sub = s.slice(i);

      if (isPalindrome(slice)) {
        dfs(sub, [...m, slice]);
      }
    }
  }

  dfs(s, []);

  return palindroms;
};



const formatStr = (str) => {
  return str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
}

var isPalindrome = function (s) {
  return formatStr(s) === formatStr(s).split('').reverse().join('');
};

console.log(partition('aab'));
console.log(partition('a'));

// a - a b b c c
// a - ab b c c
// a - ab b cc
// a - ab bcc
// a - ab bc c
// a - abb