function stockSpan(arr) {
  const result = new Array(arr.length).fill(1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      const idx = stack.pop();
      result[i] += result[idx];
    }

    stack.push(i);
  }

  return result;
}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
