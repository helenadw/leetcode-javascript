/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
       let sum = nums[0];
      
       for (let i = 1; i < nums.length; i++) {
                   sum = Math.max(sum + nums[i], nums[i])
                   maxSub = Math.max(sum, maxSub)
       }
       return maxSub;
   };