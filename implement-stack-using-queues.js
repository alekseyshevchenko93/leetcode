
class MyStack {
  constructor() {
    this.q1 = new MyQueue;
    this.q2 = new MyQueue;

    this.pushQ = this.q1;
    this.popQ = this.q2;
  }
  push(x) {
    this.pushQ.push(x);
  }
  pop() {
    if (this.empty()) {
      return null;
    }

    let size = this.pushQ.size() - 1;

    while(size) {
      this.popQ.push(this.pushQ.pop());
      size--;
    }

    const ret = this.pushQ.pop();

    [this.pushQ, this.popQ] = [this.popQ, this.pushQ];

    return ret;
  }
  empty() {
    return !this.pushQ.size();
  }
  top() {
    if (this.empty()) {
      return null;
    }

    let size = this.pushQ.size() - 1;

    while (size) {
      this.popQ.push(this.pushQ.pop());
      size--;
    }

    const ret = this.pushQ.peek();

    this.popQ.push(this.pushQ.pop());

    [this.pushQ, this.popQ] = [this.popQ, this.pushQ];

    return ret;
  }
}

class MyQueue {
  constructor() {
    this.q = [];
  }
  push(x) {
    this.q.push(x);
  }
  pop() {
    return this.q.shift();
  }
  peek() {
    return this.empty() ? null : this.q[0];
  }
  empty() {
    return !this.q.length;
  }
  size() {
    return this.q.length;
  }
}

const s = new MyStack;
s.push(1);
s.push(2);

console.log(s.top());
console.log(s.pop());
// console.log(s.pop());





