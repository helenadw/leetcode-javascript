/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        result = Math.max(result, area);
        
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return result;
    
};