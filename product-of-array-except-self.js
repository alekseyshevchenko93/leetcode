const productExceptSelf = function (nums) {
  const len = nums.length - 1;
  const arr1 = new Array(len).fill();
  const arr2 = new Array(len).fill();

  for (let i = 0; i < nums.length - 1; i++) {
    if (!i) {
      arr1[i] = nums[i];
      continue;
    }

    arr1[i] = arr1[i - 1] * nums[i];
  }

  for (let i = nums.length - 1, j = 0; i > 0; i--, j++) {
    if (i === nums.length - 1) {
      arr2[j] = nums[i];
      continue;
    }

    arr2[j] = arr2[j - 1] * nums[i];
  }

  const result = [];

  result.push(arr2.pop());

  while (arr1.length && arr2.length) {
    result.push(arr1.shift() * arr2.pop());
  }

  result.push(arr1.shift())

  return result;
};



productExceptSelf([1, 2, 3, 4])