var sortColors = function (nums) {
  let r = g = w = 0;

  for (let num of nums) {
    if (!num) {
      r++;
    } else if (num === 1) {
      g++;
    } else {
      w++;
    }
  }

  let i = 0;

  while (r--) {
    nums[i++]= 0;
  }

  while (g--) {
    nums[i++] = 1;
  }

  while (w--) {
    nums[i++] = 2;
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));








