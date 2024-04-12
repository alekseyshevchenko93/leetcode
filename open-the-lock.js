const openLock = function(deadends, target) {
  const visited = new Set;
  const q = ['0000'];
  let step = 0;

  while (q.length) {
    const items = q.slice();

    for (let item of items) {
      q.shift();

      if (visited.has(item)) {
        continue;
      }

      visited.add(item);

      if (deadends.includes(item)) {
        continue;
      }

      if (item === target) {
        return step;
      }

      for (let i = 0; i < item.length; i++) {
        const arr = item.split('');

        if (item[i] === '0') {
          const newVal = arr.slice();
          newVal[i] = 9;
          q.push(newVal.join(''));
        }

        if (item[i] >= '0' && item[i] < '9') {
          const newVal = arr.slice();
          newVal[i]++;
          q.push(newVal.join(''));
        }

        if (item[i] === '9') {
          const newVal = arr.slice();
          newVal[i] = 0;
          q.push(newVal.join(''));
        }

        if (item[i] > '0' && item[i] <= '9') {
          const newVal = arr.slice();
          newVal[i]--;
          q.push(newVal.join(''));
        }
      }
    }

    step++;
  }

  return -1;
};

// openLock(["0201","0101","0102","1212","2002"], '0202');
// console.log(openLock(["8888"], '0009'));
console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], '8888'));
// openLock('0202')