function find132pattern(nums) {
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const item = nums[i];

    if (stack.length >= 2 && item < stack[stack.length - 1] && item < stack[0] && stack[0] < stack[stack.length - 1]) {
      return true;
    }

    while (stack.length && item < stack[stack.length - 1]) {
      stack.pop();
    }

    if (!stack.length || item > stack[stack.length - 1]) {
      stack.push(item);
    }
  }

  return false;
}

console.log(find132pattern([1,2,3,4]));
console.log(find132pattern([3,1,4,2]));
console.log(find132pattern([-1,3,2,0]));
// console.log(find132pattern([1,0,1,-4,-3]));