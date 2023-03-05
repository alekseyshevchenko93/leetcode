/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hash = {};
    
    for (let c of s) {
        if (hash[c]) {
            hash[c]++;
        } else {
            hash[c] = 1;
        }
    }
    
    return Object.entries(hash).sort((a, b) => b[1] - a[1]).reduce((memo, item) => {
        return memo + new Array(item[1]).fill(item[0]).join('')
    }, '');
};
