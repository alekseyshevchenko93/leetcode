/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const hash = {};
    
    words.forEach((word) => {
        if (hash[word]) {
            hash[word]++;
        } else {
            hash[word] = 1;
        }
    });
    
    return Object.entries(hash).sort((a, b) => {
        if (a[1] === b[1])  {
            return a[0].localeCompare(b[0]);
        }
        
        return b[1] - a[1];
    }).slice(0, k).map((item) => item[0]);
};
