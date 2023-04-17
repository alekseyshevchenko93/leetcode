var findDuplicates = function (nums) {
  let start = 0;
  let end = nums.length;
  let swap = null;

  // [4,3,2,7,8,2,3,1]
  // [null,3,2,'o',8,2,3,1] swap = 7
  // [null,3,2,'o',8,2,'o',1] swap = 3
  // [null,3,'o','o',8,2,'o',1] swap = 2
  // [null,'o','o','o',8,2,'o',1] swap = 3
  // [null,'o','t','o',8,2,'o',1] swap = next iteration
  // [null,'o','t','o',8,2,'o',1] start = 4
  // [null,'o','t','o',null,2,'o','o'] swap = 1
  // ['o','o','t','o',null,2,'o','o'] swap = next iteration
  // ['o','t','t','o',null,null,'o','o'] swap = next iteration

  while (start < end) {
    const num = nums[start];

    if (!Number.isInteger(num)) {
      start++;
      continue;
    }

    nums[start] = null;
    swap = num;

    while (swap) {
      let nextSwap = nums[swap - 1];

      if (nextSwap === 'o') {
        nums[swap - 1] = 't';
        swap = null;
      } else {
        nums[swap - 1] = 'o';
        swap = nextSwap;
      }
    }
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 't') {
      result.push(i + 1);
    }
  }

  return result;
};


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));