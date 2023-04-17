const formatStr = (str) => {
  return str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
}

var isPalindrome = function (s) {
  console.log(formatStr(s));
  return formatStr(s) === formatStr(s).split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));