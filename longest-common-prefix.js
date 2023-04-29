/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    strs.sort((a, b) => a.localeCompare(b));

    const left = strs[0];
    const right = strs[strs.length - 1];

    if (left === right) {
        return left;
    }
    
    let i = 0;

    while (left[i] === right[i]) {
        i++;
    }

    return left.slice(0, i);
};
