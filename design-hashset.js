class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const BUFF_SIZE = 10000;

class MyHashSet {
  constructor() {
    this.arr = new Array(BUFF_SIZE).fill(null);
  }

  add(key) {
    const { arr } = this;

    const index = this.calcIndex(key);
    let node = arr[index];

    const newNode = new ListNode(key);

    if (!node) {
      arr[index] = newNode;
      return;
    }

    if (node.val === key) {
      return;
    }

    while (node.next) {
      if (node.next.val === key) {
        return;
      }

      node = node.next;
    }
    
    node.next = newNode;
    return;
  }

  contains(key) {
    const { arr } = this;
    const index = this.calcIndex(key);
    let node = arr[index];

    if (!node) {
      return false;
    }

    if (node.val === key) {
      return true;
    }

    while (node && node.val !== key) {
      node = node.next;
    }

    return !!node;
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

    if (node.val === key) {
      arr[index] = node.next;
      return;
    }
    while (node.next) {
      if (node.next.val === key) {
        node.next = node.next.next;
        return;
      }

      node = node.next;
    }

    return;
  }
}

// put, get, remove
// key 10^6 = 1.000.000
// max calls 10^4 = 10.000
// loadFactor? additional

const hash = new MyHashSet;
hash.add(1);
hash.add(2);

console.log(hash.contains(1));
console.log(hash.contains(3));

// hash.remove(10001);
// hash.remove(1);

// console.log(hash.arr[1]);


// console.log(hash.get(1));
// console.log(hash.get(3));

// hash.put(2, 1);

// console.log(hash.arr[2]);

// console.log(hash.get(2));


