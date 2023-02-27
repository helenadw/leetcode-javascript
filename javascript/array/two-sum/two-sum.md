# Solving Two Sum

## The challenge

We are given two arguments, an array of intergers and a target value. We need to write a function that can reach the target value by summing two values in the array and then returning their indices. We can assume that there will always be a pair of values that sum to the target, and that there will only be one possible correct answer.

For example, 

- Array of numbers, `[1, 4, 6, 7]`
- Target value `11`

Thinking through how we would solve this without code, we could:
- check each number in the array, from start to end
    - subtract that value from the target and keep track of it's index
    - check if the result of this calculation is present in the array
        - if it isn't, repeat the process
        - if it is, this is our answer
        - return the index of this value + the index of the comparison value


Thinking through this with values would go like this:

- comparison value `1` in position `0`
    - subtract comparison value `1` from target `11`, result value `10`
    - check the array for the result value `10`
        - it doesn't exist, move on to next value
- comparison value `4` in position `1`
    - subtract comparison value `4` from target `11`, result value `7`
    - check the array for the result value `7`
        - find value `7` in position `3`
        - return comparison value's position `1` and result value's position `3`


### Now we can express this in code:
```
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
```