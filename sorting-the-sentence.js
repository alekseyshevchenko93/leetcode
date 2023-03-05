/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s.split(' ');
  const sortedWords = words.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
  return sortedWords.map((word) => word.slice(0, -1)).join(' ')
};