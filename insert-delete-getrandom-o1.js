class RandomizedSet {
  constructor() {
    this.arr = [];
    this.hash = {};
  }
  insert(val) {
    if (val in this.hash) {
      return false;
    }

    const len = this.arr.length;
    this.hash[val] = len;
    this.arr.push(val);

    return true;
  }
  remove(val) {
    if (!(val in this.hash)) {
      return false;
    }

    if (this.arr.length === 1) {
      this.arr.pop();
      delete this.hash[val];
      return true;
    }

    const index = this.hash[val];
    // const last = this.arr.pop();
    const last = this.arr[this.arr.length - 1];

    this.arr[index] = last;
    this.hash[last] = index;

    this.arr.pop();

    delete this.hash[val];

    return true;
  }
  getRandom() {
    const random = Math.floor(this.arr.length * Math.random());

    return this.arr[random];
  }
}
const rs = new RandomizedSet;
rs.insert(1)
rs.insert(2)
rs.insert(3)

rs.remove(3)


console.log(rs);