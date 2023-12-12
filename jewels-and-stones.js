/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const s = new Set;
    let c = 0

    for (let item of jewels) {
        s.add(item);
    }

    for (let item of stones) {
        if (s.has(item)) {
            c++;
        }
    }

    return c;
};
