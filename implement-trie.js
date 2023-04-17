class Trie {
  constructor() {
    this.nodes = {};
    this.hash = {};
  }
  insert(str) {
    let { nodes } = this;

    for (let char of str) {
      const node = nodes[char];

      if (!node) {
        nodes[char] = {};
      }

      nodes = nodes[char];
    }

    this.hash[str] = true;
  }
  search(str) {
    return !!this.hash[str];
  }
  startsWith(str) {
    let { nodes } = this;

    for (let char of str) {
      if (!nodes[char]) {
        return false;
      }

      nodes = nodes[char];
    }

    return true;
  }
}

const trie = new Trie;
trie.insert('apple');
console.log(trie.search('apple'));
console.log(trie.startsWith('a'));


// console.log(JSON.stringify(trie, null, 2));