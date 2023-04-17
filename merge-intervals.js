
const merge = function (intervals) {
  const sortedIntervals = intervals.sort(([a], [b]) => a - b);
  // console.log(sortedIntervals);;

  let i = 0;

  while (i < sortedIntervals.length - 1) {
    const left = sortedIntervals[i]
    const right = sortedIntervals[i + 1];

    if (left[1] >= right[0]) {
      const mergedInterval = [left[0], Math.max(left[1], right[1])];
      sortedIntervals.splice(i, 2, mergedInterval);
    } else {
      i++;
    }
  }


  return sortedIntervals;
};

// console.log(merge([[1, 3], [2, 6], [15, 18], [8, 10]]));
console.log(merge([[1, 4], [4, 5]]));