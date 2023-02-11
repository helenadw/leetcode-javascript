/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lower = s.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase();
    let left = 0;
    let right = lower.length - 1;
    
    while (left < right) {
        if (lower[left] !== lower[right]) return false;
        left++;
        right--;
    }
        return true;
};