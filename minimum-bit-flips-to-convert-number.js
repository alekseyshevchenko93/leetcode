/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(x, y) {
  let distance = 0;

  while (x || y) {
    const xBit = x & 1;
    const yBit = y & 1;

    distance += xBit ^ yBit;

    y = y >> 1;
    x = x >> 1;
  }

  return distance;
};