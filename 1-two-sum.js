
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if ((target - num) in hash) {
      return [
        hash[target - num],
        i
      ]
    }

    hash[num] = i;
  }
};

const input = [3, 2, 4];

const r = twoSum(input, 6);
console.log(r);