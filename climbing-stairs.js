
const climbStairs = function (n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  return memo[n];
};


// const climbStairs = function (n, memo = {}) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   let a = 1, b = 2;

//   for (let i = 2; i < n; i++) {
//     let temp = b;
//     b = a + b;
//     a = temp;
//   }

//   return b;
// };


console.log(climbStairs(5));