const dailyTemperatures = function(temperatures) {
    const stack = [];
    const results = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      const item = temperatures[i];

      while (stack.length && temperatures[stack[stack.length -1]] < item) {
        const j = stack.pop();
        results[j] = i - j;
      }

      stack.push(i);
    }

    return results;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));