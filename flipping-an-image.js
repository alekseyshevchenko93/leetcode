/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image
        .map((row) => row.reverse())
        .map((row) => row.map((item) => !item ? 1 : 0));
};
