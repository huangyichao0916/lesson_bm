/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */

var missingNumber = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    })
    let t;
    let flag = nums.some((item, index) => {
        t = index;
        return item !== index;
        
    })
    if (flag) {
        return t;
    }
    else {
        return nums.length;
    }
}
console.log(missingNumber([0,1,3,4,5]));