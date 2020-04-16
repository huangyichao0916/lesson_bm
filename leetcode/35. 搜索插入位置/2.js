/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length===1){
        if (nums[0]>target) {
            return 0;
        }
        else{
            return nums[0]<target?1:0;
        }
    }
    else{
        if (nums[0]>target) {
            return 0;
        } 
        if (nums[nums.length-1]==target) {
            return nums.length-1;
        }
        for (let i = 1; i < nums.length; i++) {
            if(nums[i]>target){
                if (nums[i-1]===target) {
                    return i-1;
                }
                return i;
            }
        }
        return nums.length;
    }
};
console.log(searchInsert([1,3],3));