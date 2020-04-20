/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */

var missingNumber = function (nums) {
    let sum_1 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum_1 += nums[i];
    }
    let sum_2 = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        sum_2 += i;
    }
    return sum_2 - sum_1;
}

console.log(missingNumber([0,1,3,4,5]));