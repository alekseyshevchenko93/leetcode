function minBitwiseArray(nums) {
  const ans = new Array(nums.length).fill(-1);

  for (let i = 0; i < ans.length; i++) {

    for (let j = 0; j <= nums[i]; j++) {
      if ((j | j + 1) === nums[i]) {
        ans[i] = j;
        break;
      }
    }
  }

  return ans;
}
