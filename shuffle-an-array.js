class Solution {
  constructor(arr) {
    this.originalArr = arr.slice();
    this.arr = arr;
  }

  shuffle() {
    const { arr } = this;

    for (let i = arr.length - 1; i >= 0; i--) {
      const idx = this.randIndex();

      const temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
    }

    return arr;
  }

  randIndex() {
    const min = 0, max = this.arr.length - 1;
    return Math.floor(
      Math.random() * (max - min + 1) + min
    );
  }

  reset() {
    return this.arr = this.originalArr.slice();
  }
}

const s = new Solution([1,2,3,4,5]);
s.shuffle();

console.log(s.arr);