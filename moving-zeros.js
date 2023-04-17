
function movingZeros(nums) {
  let anchor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[anchor];
      nums[anchor] = nums[i];
      nums[i] = temp;

      anchor++;
    }
  }

  return nums;
}

console.log(movingZeros([0, 0, 6, 0, 12, 1]));