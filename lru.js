class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.currentCapacity = 0;
    this.hash = {};
    this.listHead = null;
    this.listTail = null;
  }

  touch(node) {
    const prev = node.prev;
    const next = node.next;
    const tail = this.listTail;
    const head = this.listHead;

    if (node === tail) {
      return;
    }

    if (node === head) {
      this.listHead = head.next;
    }

    if (prev) {
      prev.next = next;
    }

    next.prev = prev;
    tail.next = node;
    node.prev = tail;
    node.next = null;
    this.listTail = node;
  }

  get(key) {
    const node = this.hash[key];

    if (!node) {
      return -1;
    }

    const value = node.value;

    this.touch(node);

    return value;
  }

  put(key, value) {
    const nodeExists = this.hash[key];

    let node = nodeExists
      ? Object.assign(nodeExists, { value }) : { key, value };

    this.hash[key] = node;

    if (!this.currentCapacity) {
      this.listHead = this.listTail = node;
    } else if (this.currentCapacity < this.capacity) {
      if (!nodeExists) {
        const tail = this.listTail;
        tail.next = node;
        node.prev = tail;
        this.listTail = node;
      } else {
        this.touch(node);
      }
    } else {
      const head = this.listHead;
      const tail = this.listTail;

      if (!nodeExists) {
        delete this.hash[head.key];
        this.listHead = head.next ? head.next : head;
        tail.next = node;
        node.next = null;
        node.prev = tail;
        this.listTail = node;
      } else {
        this.touch(node);
      }
    }

    if (!nodeExists) {
      this.currentCapacity = Math.min(this.capacity, this.currentCapacity + 1);
    }
  }
}


// ["LRUCache", "put", "put", "get", "put", "put", "get"]
// [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]]

const lRUCache = new LRUCache(1);
lRUCache.get(6);    // return 2
lRUCache.get(8);    // return 2
lRUCache.put(12, 1); // cache is {1=1}
lRUCache.get(2);    // return 2
lRUCache.put(15, 11); // cache is {1=1}
lRUCache.put(5, 2); // cache is {1=1}

// lRUCache.put(2, 1); // cache is {1=1}
// lRUCache.get(2);    // return 2
// lRUCache.put(3, 2); // cache is {1=1}
// lRUCache.get(3);    // return 2
// lRUCache.put(1, 1); // cache is {1=1, 2=2}
// lRUCache.put(4, 1); // cache is {1=1, 2=2}
// console.log(lRUCache.get()); // cache is {1=1, 2=2}

// lRUCache.put(2, 3); // cache is {1=1, 2=2}
// console.log(lRUCache);

// console.log(lRUCache.get(2));
// lRUCache.put(3, 3); // cache is {1=1, 2=2}
