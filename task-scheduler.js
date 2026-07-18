'use strict';

class MaxHeap {
  constructor() {
    this.heap = [];
    this.keyToIndex = new Map();
  }

  push(key, value, priority) {
    if (this.keyToIndex.has(key)) {
      const index = this.keyToIndex.get(key);
      const node = this.heap[index];

      node.value = value;
      node.priority = priority;
      this.#siftUp(index);
      this.#siftDown(index);
      return;
    }

    const node = { key, value, priority };
    this.heap.push(node);
    this.keyToIndex.set(key, this.heap.length - 1);
    this.#siftUp(this.heap.length - 1);
  }

  get(key) {
    const index = this.keyToIndex.get(key);
    return index === undefined ? null : this.heap[index];
  }

  peek() {
    return this.heap[0] ?? null;
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    this.#swap(0, this.heap.length - 1);
    const node = this.heap.pop();
    this.keyToIndex.delete(node.key);

    if (this.heap.length > 0) {
      this.#siftDown(0);
    }

    return node;
  }

  remove(key) {
    const index = this.keyToIndex.get(key);

    if (index === undefined) {
      return null;
    }

    this.#swap(index, this.heap.length - 1);
    const node = this.heap.pop();
    this.keyToIndex.delete(node.key);

    if (index < this.heap.length) {
      this.#siftUp(index);
      this.#siftDown(index);
    }

    return node;
  }

  get size() {
    return this.heap.length;
  }

  #siftUp(index) {
    let current = index;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.heap[parent].priority >= this.heap[current].priority) {
        break;
      }

      this.#swap(parent, current);
      current = parent;
    }
  }

  #siftDown(index) {
    let current = index;

    while (true) {
      const left = current * 2 + 1;
      const right = current * 2 + 2;
      let largest = current;

      if (left < this.heap.length && this.heap[left].priority > this.heap[largest].priority) {
        largest = left;
      }

      if (right < this.heap.length && this.heap[right].priority > this.heap[largest].priority) {
        largest = right;
      }

      if (largest === current) {
        break;
      }

      this.#swap(current, largest);
      current = largest;
    }
  }

  #swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    this.keyToIndex.set(this.heap[i].key, i);
    this.keyToIndex.set(this.heap[j].key, j);
  }
}

const maxHeap = new MaxHeap();

const leastInterval = function(tasks, n) {
  const freq = {};

  for (let task of tasks) {
    if (task in freq)   {
      freq[task]++;
    } else {
      freq[task] = 1
    }
  }

  for (let [key] of Object.entries(freq)) {
    maxHeap.push(key, null, freq[key])
  }

  const result = [];
  let iteration = 0;
  const q = [];

  while (q.length || maxHeap.size) {
    while (q.length && q[0].iteration === iteration) {
      const val = q.shift();
      maxHeap.push(val.key, null, val.priority)
    }

    const item = maxHeap.pop();

    if (!item) {
      result.push('idle');
      iteration++;
      continue;
    }

    const { key, priority } = item;
    result.push(key);

    const newPriority = priority - 1;

    if (newPriority) {
      q.push({ key, priority: newPriority, iteration: iteration + n + 1 });
    }

    iteration++;
  }

  return result;
};

// leastInterval(["A","A","A","B","B","C", "C"], 1);
// leastInterval(["A","A","A","B","B","B"], 2)
// leastInterval( ["A","C","A","B","D","B"], 1)
leastInterval(["A","A","A", "B","B","B"], 3);

/*
[A","A","A","B","B","C", "C]
n = 1
freq = {
  A: 1
  B: 
  C: 2
}

q = [{A,5}, {B,7}]

result = [A, B, A, B, ]

*/
// queue.set('low', 'cleanup', 1);
// queue.set('high', 'deploy', 10);
// queue.set('mid', 'test', 5);
// assert.deepStrictEqual(queue.peek(), { key: 'high', value: 'deploy', priority: 10 });

// queue.set('mid', 'test-again', 20);
// assert.deepStrictEqual(queue.pop(), { key: 'mid', value: 'test-again', priority: 20 });
// assert.deepStrictEqual(queue.delete('low'), { key: 'low', value: 'cleanup', priority: 1 });
// assert.deepStrictEqual(queue.get('high'), { key: 'high', value: 'deploy', priority: 10 });
