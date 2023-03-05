class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

const BUFF_SIZE = 10000;

class MyHashMap {
  constructor() {
    this.arr = new Array(BUFF_SIZE).fill(null);
  }

  put(key, value) {
    const { arr } = this;

    const index = this.calcIndex(key);
    let node = arr[index];

    const newNode = new ListNode(key, value);

    if (!node) {
      arr[index] = newNode;
      return;
    }

    let prev;

    while (node) {
      if (node.key === key) {
        node.val = value;
        return;
      }

      prev = node;
      node = node.next;  
    }

    prev.next = newNode;
    return;
  }

  get(key) {
    const { arr } = this;
    const index = this.calcIndex(key);
    let node = arr[index];

    if (!node) {
      return -1;
    }

    while (node && node.key !== key) {
      node = node.next;
    }

    return node ? node.val : -1;
  }

  calcIndex(key) {
    return key % BUFF_SIZE;
  }

  remove(key) {
    const { arr } = this;
    const index = this.calcIndex(key);
    let node = arr[index];

    if (!node) {
      return;
    }

    if (node && node.key === key && !node.next) {
      arr[index] = null;
      return;
    }

    let prev;

    while (node) {
      if (node.key === key) {
        if (!prev) {
          arr[index] = node.next;
          return;
        }

        prev.next = node.next;
        return;
      }

      prev = node;
      node = node.next;
    }
    return;
  }
}

// put, get, remove
// key 10^6 = 1.000.000
// max calls 10^4 = 10.000
// loadFactor? additional

const hash = new MyHashMap;
hash.put(1, 1);
hash.put(2, 2);


// console.log(hash.get(1));
// console.log(hash.get(3));

// hash.put(2, 1);

// console.log(hash.arr[2]);

// console.log(hash.get(2));


