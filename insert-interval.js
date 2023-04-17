const insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }

  let i = 0;

  while (i < intervals.length) {
    const item = intervals[i];
    const [left] = item;

    if (left >= newInterval[0]) {
      break;
    }

    i++;
  }

  intervals.splice(i, 0, newInterval);

  const arr = [];

  while (intervals.length > 1) {
    // console.log(intervals);
    const left = intervals[0];
    const right = intervals[1];

    if (left[1] < right[0]) {
      arr.push(left);
      intervals.shift();
      continue;
    }

    intervals.shift();
    intervals[0] = [Math.min(left[0], right[0]), Math.max(left[1], right[1])];
  }

  if (intervals.length) {
    arr.push(intervals.shift());
  }

  console.log(arr);

  return arr;
};

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4,8]));
console.log(insert([[1, 5]], [2,7]));
