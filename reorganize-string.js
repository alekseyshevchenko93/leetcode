const {
  Heap,
  MinHeap,
  MaxHeap,
} = require('@datastructures-js/heap');

const reorganizeString = function(s) {
  const maxHeap = new MaxHeap((item) => item.value);

  const freq = {};

  for (let c of s) {
    if (c in freq) {
      freq[c]++;
    } else {
      freq[c] = 1;
    }
  }

  for (let [key, value] of Object.entries(freq)) {
    maxHeap.insert({
      key,
      value
    })
  } 

  let result = [];
  let q = [];
  let lastItem;
  let it = 0;

  while (maxHeap.size() || q.length) {
    if (q.length && q[0].it === it) {
      const { key, value } = q.shift();
      maxHeap.insert({ key, value });
    }

    const item = maxHeap.pop();

    if (!item) {
      return "";
    }

    result.push(item.key);
    it++;

    const newValue = item.value - 1;

    if (newValue) {
      q.push({ key: item.key, value: newValue, it: it + 1 })
    }
  }

  return result.join('');
};

reorganizeString('aab')
reorganizeString('aaab');
