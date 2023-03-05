var solution = function (isBadVersion) {
  return function (n) {
    let start = 1, end = n;
    let lastBadVersion;

    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      const isBad = isBadVersion(mid);

      if (isBad) {
        lastBadVersion = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return lastBadVersion;
  };
};