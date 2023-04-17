
const assert = require('assert');

function coinChange(coins, amount, memo = {}) {
  if (memo[amount]) {
    return memo[amount];
  }

  if (!amount) {
    return 0;
  }

  if (amount < 0) {
    return -1;
  }

  for (let coin of coins) {
    const ret = coinChange(coins, amount - coin, memo);

    if (ret === -1) {
      if (!(amount in memo)) {
        memo[amount] = ret;
      }
      continue;
    } else if (memo[amount] && memo[amount] > 0) {
      memo[amount] = Math.min(ret + 1, memo[amount]);
    } else {
      memo[amount] = ret + 1;
    }
  }

  // console.log(memo);
  return memo[amount] || -1;
};

assert.equal(coinChange([1], 0), 0);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1,2,5], 11), 3);
assert.equal(coinChange([2], 4), 2);
// assert.equal(coinChange([186, 419, 83, 408], 6249), -1);
assert.equal(coinChange([2, 5, 10], 27), 4);
// console.log('res', coinChange([2], 3));
// console.log(coinChange([186, 419, 83, 408], 6249));
console.log('res', coinChange([186, 419, 83, 408], 6249));
// console.log('res', coinChange([2, 5, 10], 27));