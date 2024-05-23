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

var maxProfit2 = function(arr) {
  let maxElem = 0, maxProfit = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
      const item = arr[i];

      if (maxElem - item > maxProfit) {
          maxProfit = maxElem - item;
      }

      maxElem = Math.max(maxElem, item);
  }

  return maxProfit;
};


// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));