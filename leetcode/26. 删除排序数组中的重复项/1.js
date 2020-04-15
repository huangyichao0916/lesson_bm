/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slowP = 0;
    for (let fastP = 0; fastP < nums.length; fastP++) {
        if (nums[fastP]!=nums[slowP]) {
            slowP++;
            nums[slowP]=nums[fastP];
        }
    }
    return slowP+1;
};