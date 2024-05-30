const finalPrices = function(prices) {
  const result = [];
  const stack = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    const item = prices[i];

    while(stack.length && stack[stack.length - 1] > item) {
      stack.pop();
    }
    
    result[i] = stack.length ? item - stack[stack.length - 1] : item;

    stack.push(item);
  }

  return result;
};

// console.log(finalPrices([8,4,6,2,3]));
console.log(finalPrices([10,1,1,6]));