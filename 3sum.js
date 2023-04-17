

const threeSum = (arr) => {
  const triplets = {};

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    let left = i + 1;
    let right = arr.length - 1;;

    while (left < right) {
      const sum = item + arr[left] + arr[right];

      if (!sum) {
        const value = [item, arr[left], arr[right]];
        const key = value.toString();
        triplets[key] = value;
      }

      if (sum < 0) {
        left++
      } else {
        right--;
      }
    }
  }

  return Object.values(triplets);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));