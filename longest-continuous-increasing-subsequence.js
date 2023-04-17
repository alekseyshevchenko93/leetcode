const findLengthOfLCIS = function (nums) {
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    let currentMax = 1;

    let j = i + 1;
    while (j < nums.length && nums[j - 1] < nums[j]) {
      currentMax++;
      max = Math.max(max, currentMax);
      j++;
    }
  }

  return max;
};

const findLengthOfLCIS2 = function (nums) {
  let max = 1;

  let i = 0;

  while (i < nums.length) {
    let currentMax = 1;
    let j = i + 1;

    while (j < nums.length && nums[j - 1] < nums[j]) {
      currentMax++;
      max = Math.max(max, currentMax);
      j++;
    }

    i = j;
  }

  return max;
};

const findLengthOfLCIS3 = function (nums) {
  let max = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }

  return max;
};


// [1, 3, 5, 4, 2, 3, 4, 5]

console.log(findLengthOfLCIS3([1, 5, 3, 4, 2, 3, 4, 5]));