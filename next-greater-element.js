function nextGreaterElement(items) { // mono increasing
  const result = new Array(items.length).fill(-1);
  const stack = [];

  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];

    while (stack.length && stack[stack.length - 1] <= item) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(item);
  }

  return result;
}