const divideArray = function(nums) {
  const hash = {};

  for (let num of nums) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  for (let num of Object.keys(hash)) {
    if (hash[num] & 1) {
      return false;
    }
  }

  return true;
};

const divideArray2 = function(nums) {
  const hash = {};

  for (let num of nums) {
    hash[num] ^= num;
  }

  return Object.values(hash).every((item) => !item);
};


console.log(divideArray([3,2,3,2,2,2]));
console.log(divideArray([1,2,3,4]));