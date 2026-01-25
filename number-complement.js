
const findComplement = function(num) {
  let res = 0;
  let i = 0;

  while (num) {
    const bit = num & 1;
    res |= (bit ^ 1) << i;
    num = num >> 1;
    i++;
  }

  return res;
};

findComplement(5);
findComplement(2);