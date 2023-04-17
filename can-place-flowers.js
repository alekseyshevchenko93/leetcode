const canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length;

  let i = 0;

  while (n && i < len) {
    const item = flowerbed[i];

    if (item === 1) {
      i++;
      continue;
    }

    if (item === 0 && (
      (len === 1) ||
      (i === len - 1 && flowerbed[i - 1] === 0) ||
      (i === 0 && flowerbed[i + 1] === 0) ||
      (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0)
    )) {
      flowerbed[i] = 1;
      n--;
    }

    i++;
  }

  return !n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([0], 1));