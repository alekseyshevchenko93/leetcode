var containsDuplicate = function (nums) {
  const hash = {};

  for (let num of nums) {
    if (hash[num]) {
      console.log('here', num);
      return true;
    } else {
      hash[num] = true;
    }
  }

  return false;
};

console.log(containsDuplicate([1,2,3,1]));