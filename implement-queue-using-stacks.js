
class Stack {
  constructor() {
    this.stack = [];
  }
  push(x) {
    this.stack.push(x);
  }
  pop() {
    return this.stack.pop();
  }
  empty() {
    return !this.stack.length;
  }
  peek() {
    return this.empty() ? null : this.stack[this.stack.length - 1];
  }
}

class MyQueue {
  constructor() {
    this.s1 = new Stack;
    this.s2 = new Stack;
  }
  push(x) {
    this.s1.push(x);
  }
  moveFromS1ToS2() {
    while (!this.s1.empty()) {
      const x = this.s1.pop();
      this.s2.push(x);
    }
  }
  pop() {
    if (this.s2.empty()) {
      this.moveFromS1ToS2();
    }

    return this.s2.pop();
  }
  peek() {
    if (this.s2.empty()) {
      this.moveFromS1ToS2();
    }

    return this.s2.empty() ? null : this.s2.peek();
  }
  empty() {
    return this.s1.empty() && this.s2.empty();
  }
}

const q = new MyQueue;
q.push(1);
q.push(2);
console.log(q.peek());


console.log(q);