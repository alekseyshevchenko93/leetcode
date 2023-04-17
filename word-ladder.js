


function getAdjacentWords(wordList, word) {
  const adjacent = [];

  for (let w of wordList) {
    let counter = 0;

    if (w === word) {
      continue;
    }

    for (let i = 0; i < w.length; i++) {
      if (w[i] === word[i]) {
        continue;
      }

      if (w[i] !== word[i]) {
        counter++;
      }
    }

    if (counter === 1) {
      adjacent.push(w);
    }
  }

  return adjacent;
}

const ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const s = new Set;

  const q = [{
    word: beginWord,
    memo: 1
  }];

  while (q.length) {
    const { word, memo } = q.shift();

    if (word === endWord) {
      return memo;
    }

    if (s.has(word)) {
      continue;
    }

    s.add(word);

    const words = getAdjacentWords(wordList, word);

    for (let word of words) {
      q.push({
        word,
        memo: memo + 1
      });
    }
  }

  return 0;
};

console.log(ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]))
// ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"])
