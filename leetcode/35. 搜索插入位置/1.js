/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let indexOfTarget;
    if(nums.some((item,index) => {
        indexOfTarget = index;
        return item == target;
    })){
        return indexOfTarget;
    }
    else{
        if(nums.some((item,index) => {
            indexOfTarget = index;
            return item>target;
        })){
            return indexOfTarget;
        }
        return nums.length;
    }
};
console.log(searchInsert([1,2,3],5));