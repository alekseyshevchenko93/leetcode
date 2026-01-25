// const hammingDistance = function(x, y) {
//   let distance = 0;

//   while (x || y) {
//     const xBit = x & 1;
//     const yBit = y & 1;

//     distance += xBit === yBit ? 0 : 1;

//     y = y >> 1;
//     x = x >> 1;
//   }

//   // console.log((x).toString(2), y.toString(2));
//   // console.log('distance:', distance);

//   return distance;
// };

const hammingDistance = function(x, y) {
  let distance = 0;

  while (x || y) {
    const xBit = x & 1;
    const yBit = y & 1;

    distance += xBit ^ yBit;

    y = y >> 1;
    x = x >> 1;
  }

  // console.log((x).toString(2), y.toString(2));
  console.log('distance:', distance);

  return distance;
};

hammingDistance(1, 4);
hammingDistance(3, 1);