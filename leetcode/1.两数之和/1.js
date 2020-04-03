//暴力解法代码
function twoSum(nums,target){
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if((nums[i]+nums[j])==target){
                arr=[i,j];
                return arr;
            }
        }
    }
}

let nums = [1,5,2,7];
let target =7;
let arr= twoSum(nums,target);
console.log(arr);
