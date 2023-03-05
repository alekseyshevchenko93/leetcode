var mySqrt = function (x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const mul = mid * mid;

    if (mul > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return left - 1;
};
// console.log(mySqrt(8));
console.log(mySqrt(1));