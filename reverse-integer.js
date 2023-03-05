const reverse = function (x) {
  let n = 0;
  const sign = x > 0 ? 1 : -1;
  const min = 2 ** 31 * -1;
  const max = 2 ** 31 - 1;

  if (sign === -1) {
    x *= -1;
  }

  while (x) {
    n = n * 10 + x % 10
    x = Math.floor(x / 10);
  }

  const computedNumber = n * sign;

  if (computedNumber > max || computedNumber < min) {
    return 0;
  }

  return computedNumber;
};

console.log(reverse(-23));