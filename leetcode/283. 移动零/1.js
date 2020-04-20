/**
 * 
 * @param {number[]} nums 
 * @return {volid}
 */
var moveZeroes = function(nums) {
    // let len = nums.length;
    let flag = 0;
    // console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums);
        if (nums[i]===0) {
            nums.splice(i,1);
            flag++;
            // nums.push(0);
            i--;
        }
    }
    for (let i = 0; i < flag; i++) {
        nums.push(0);
    }
    // console.log(nums);
    return nums;
};

console.log(moveZeroes([1,2,0,9]));