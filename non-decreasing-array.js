function isIncreasing(nums) {
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < prev) {
      return false;
    }

    prev = nums[i];
  }

  return true;
}

const checkPossibility = function (nums) {
  let indexes;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < prev) {
      if (indexes) {
        return false;
      }

      indexes = [i - 1, i];
    }

    prev = nums[i];
  }

  if (!indexes) {
    return true;
  }

  const [i, j] = indexes;

  let temp = nums[i];
  nums[i] = nums[j];

  let res = isIncreasing(nums);

  if (res) {
    return true;
  }

  nums[i] = nums[j] = temp;

  return isIncreasing(nums);
};

// console.log(checkPossibility([4,2,3,5]));
// console.log(checkPossibility([4, 2, 1]));
// console.log(checkPossibility([3, 4,2,3]));
console.log(checkPossibility([5, 7, 1, 8]));