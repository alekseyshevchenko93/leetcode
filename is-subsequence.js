/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const l = s.length;
    let c = 0;
    
    for (let item of t) {
        if (c === l) {
            return true;
        }

        if (item === s[c]) {
            c++;
            continue;
        }
    }

    return c === l;
};
