
function getSquare(height, left, right) {
  const x = Math.abs(left - right);
  const square = Math.min(height[left], height[right]) * x;
  return square;
}

var maxArea = function (height) {
  // const left = 1;
  // const right = height.length - 1;

  // const square = getSquare(height, left, right);
  let left = 0, right = height.length - 1;
  let maxSquare = 0;

  while (left < right) {
    maxSquare = Math.max(maxSquare, getSquare(height, left, right));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  console.log('done', maxSquare);
  return maxSquare;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 1]);