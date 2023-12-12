
const nextGreaterElement = function(nums1, nums2) {
  const hash = {};

  for (let i = 0; i < nums2.length; i++) {
    const item = nums2[i];
    hash[item] = i;
  }

  const nextBigger = new Array(nums2.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    const item = nums2[i];

    while (stack.length && nums2[stack[stack.length - 1]] < item) {
      const j = stack.pop();
      nextBigger[j] = item;
    }

    stack.push(i);
  }

  return nums1.map((item) => {
    const i = hash[item];
    return nextBigger[i];
  })
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));