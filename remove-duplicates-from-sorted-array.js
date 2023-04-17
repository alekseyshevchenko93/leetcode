const removeDuplicates = function (nums) {
  let idx = 0;
  let prev;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[idx] = nums[i];
      idx++;
    }

    prev = nums[i]
  }

  return idx;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1,1,2]));