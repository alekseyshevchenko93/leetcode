const maxProfit = function (prices) {
  let l = 0;
  let maxProfit = 0;

  for (let i = l + 1; i < prices.length; i++) {
    if (prices[i] < prices[l]) {
      l = i;
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - prices[l]);
    }
  }

  return maxProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));