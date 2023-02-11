/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    let max = [nums[0]];
    let min = [nums[0]];
    let product = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        max[i] = Math.max(nums[i], nums[i] * max[i-1], nums[i] * min[i-1]);
        min[i] = Math.min(nums[i], nums[i] * max[i-1], nums[i] * min[i-1]);
        product = Math.max(max[i], product)
    }
    return product;
};