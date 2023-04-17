class WordDictionary {
  constructor() {
    this.children = {};
  }
  addWord(word) {
    let { children } = this;

    for (let c of word) {
      if (!children[c]) {
        children[c] = {};
      }

      children = children[c];
    }

    children['$'] = null;
  }
  search(word) {
    let { children } = this;

    function dfs(index, children) {
      for (let i = index; i < word.length; i++) {
        const c = word[i];

        if (c === '.') {
          for (let key of Object.keys(children)) {
            if (key !== '$' && dfs(i + 1, children[key])) {
              return true;
            }
          }

          return false;
        } else {
          if (!children[c]) {
            return false;
          } else {
            children = children[c];
          }
        }
      }

      return '$' in children;
    }


    return dfs(0, children);
  }
}

const wordDictionary = new WordDictionary();
// wordDictionary.addWord('badd');
wordDictionary.addWord('a');
// wordDictionary.addWord('dad');
// wordDictionary.addWord('mad');
// wordDictionary.addWord('an');


// console.log(wordDictionary.search('pad'));
console.log(wordDictionary.search('a.'));