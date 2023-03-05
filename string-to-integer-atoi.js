const myAtoi = function (s) {
  let sign = 1;
  let number = 0;
  const min = 2**31 * -1;
  const max = 2**31 - 1;

  let i = 0;

  while (i < s.length && s[i] === ' ') {
    i++;
  }

  if (s[i] === '+') {
    i++;
  } else if (s[i] === '-') {
    sign = -1;
    i++;
  }

  while (i < s.length && s[i].match(/[0-9]/)) {
    number = number * 10 + (+s[i]);
    i++;
  }

  const computedNumber = number * sign;

  if (computedNumber < min) {
    return -min;
  }

  if (computedNumber > max) {
    return max;
  }

  return computedNumber;
};


console.log(myAtoi('   -123'));