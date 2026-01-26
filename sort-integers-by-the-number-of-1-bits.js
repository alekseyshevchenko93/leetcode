const sortByBits = function(arr) {
  const numToBits = {};

  for (let num of arr) {
    numToBits[num] = countBits(num);
  }

  const sorted = arr.sort((a, b) => {
    if (numToBits[a] === numToBits[b]) {
      return a - b;
    }

    return numToBits[a] - numToBits[b];
  });

  return sorted
};

function countBits(num) {
  let count = 0;

  while (num) {
    num = num & (num - 1);
    count++;
  }

  return count;
}

// countBits(7);
sortByBits([0,1,2,3,4,5,6,7,8]);