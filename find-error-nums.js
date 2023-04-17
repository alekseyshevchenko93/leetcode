var findErrorNums = function (nums) {
  const arr = new Array(nums.length).fill();
  let duplicate;
  let missing;

  for (let num of nums) {
    if (arr[num]) {
      duplicate = num;
    } else {
      arr[num] = true;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!arr[i]) {
      return [duplicate, i];
    }
  }
};