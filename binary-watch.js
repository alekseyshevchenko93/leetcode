// Hours: 4 LEDs on top
// Minutes: 6 LEDs on bottom

const readBinaryWatch = function(turnedOn) {
  const results = [];

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      const count = countBits(i) + countBits(j);

      if (count === turnedOn) {
        const time = `${i}:${padLeft(j)}`;
        results.push(time);
      }
    }
  }

  return results;
};

function padLeft(num) {
  return num > 9 ? num : `0${num}`;
}

function countBits(num) {
  let count = 0;

  while (num) {
    count += 1 & num
    num = num >> 1;
  }

  return count;
}

readBinaryWatch(9);
// console.log(countBits(7));

// Hours:  [8,2,1], [8,2], [8,1], [8], [4,2,1], [4,2], [4,1], [4], [2,1], [2], [1]
// total: 11
// 3 LEDS:  [8,2,1], [4,2,1] - 2
// 2 LEDS: [8,2], [8,1], [4,2], [4,1], [2,1] - 5
// 1 LEDS [8], [4], [2], [1] - 4
// max 0-3 bits


// Minutes [32,16,8,2,1], []