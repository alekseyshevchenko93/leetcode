const isPowerOfTwo = function(num) {
  let res = 0;

  while (num) {
    let bit = 1 & num;
    
    if (res & bit) {
        return false;
    }

    res = res | bit;
    num = num >> 1
  }

  return res;
};


console.log(isPowerOfTwo(8));
console.log((1 << 0).toString(2));

// 1 1 1