

function trailingZeroes(n) {
  let times = 5;
  let count = 0;

  for (let i = 1 ; i <= times; i++) {
    count = Math.floor(n / (5 * i))
  }

  return count;
}