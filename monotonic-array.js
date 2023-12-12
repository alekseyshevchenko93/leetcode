/**
 * @param {number[]} nums
 * @return {boolean}
 */

function isIncreasing(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            return false
        }
    }

    return true;
}

function isDecreasing(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false
        }
    }

    return true;
}

var isMonotonic = function(nums) {
    return isIncreasing(nums) || isDecreasing(nums);
};
