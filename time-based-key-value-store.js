
const assert = require('assert');

const arr = [1,2,3,4,5,6,7];

class TimeMap {
  constructor() {
    this.hash = {};
  }
  set(key, value, timestamp) {
    const payload = { timestamp, value };

    if (!this.hash[key]) {
      this.hash[key] = [payload];
      return;
    }

    this.hash[key].push(payload);
  }
  get(key, timestamp) {
    if (!this.hash[key]) {
      return '';
    }

    const arr = this.hash[key];
    const index = this.binarySearch(arr, timestamp);

    if (index === -1) {
      return '';
    }

    return this.hash[key][index].value;
  }
  binarySearch(arr, val) {
    let left = 0, right = arr.length - 1;
    let prev = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid].timestamp === val) {
        return mid;
      }

      if (arr[mid].timestamp > val) {
        right = mid - 1;
        continue;
      }

      if (arr[mid].timestamp < val) {
        prev = mid;
        left = mid + 1;
        continue;
      }
    }

    return prev;
  }
}

const m = new TimeMap;
// m.set("foo", "bar", 1);
// console.log('get', m.get("foo", 1));
// console.log('get', m.get("foo", 3));
// m.set("foo", "bar2", 4);
// console.log('get', m.get("foo", 4));
// console.log('get', m.get("foo", 5));

m.set('love', 'high', 10);
m.set('love', 'low', 20);

// console.log('get', m.get('love', 5));
console.log('get', m.get('love', 10));

// assert.equal(binarySearch(arr, 2), 1);
// assert.equal(binarySearch(arr, 3), 2);
// assert.equal(binarySearch(arr, 7), 6);

// console.log(m.hash);