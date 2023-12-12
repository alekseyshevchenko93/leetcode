/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const hash = {};

    for (let i = 0; i < order.length; i++) {
        hash[order[i]] = i;
    }

    const sorted = words
        .slice()
        .sort((a, b) => {
            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                if (hash[a[i]] < hash[b[i]]) {
                    return -1;
                } else if (hash[a[i]] > hash[b[i]]) {
                    return 1;
                } else {
                    continue;
                }
            }

            return a.length === b.length ? 0 : a.length - b.length;
        });

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== sorted[i]) {
            return false;
        }
    }

    return true;
};
