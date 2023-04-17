function squares(arr) {
  const result = [];

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const powLeft = Math.pow(arr[left], 2);
    const powRight = Math.pow(arr[right], 2);
    if (powLeft > powRight) {
      result.unshift(powLeft)
      left++;
    } else {
      result.unshift(powRight);
      right--
    }
  }

  return result;
}

squares([-4, -1, 0, 3, 10]);