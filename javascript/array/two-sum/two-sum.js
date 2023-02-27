/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let pair = target - value;
        if (map[pair] !== undefined) {
            return [map[pair], i]
        } else {
            map[value] = i;
        }
    }
};
