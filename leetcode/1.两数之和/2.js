// sh = {
//     '59':78,
//     34:34,
//     'g':34
// }
// sh[234]=5;
// console.log(sh[234]);
// console.log(sh['234']);
// console.log(sh.g);
var twoSum = function(nums, target) {
    let arr= [];
    let nums_json = {};
    nums.forEach(function (item,index){
        nums_json[item]=index;
    });
    for (let i = 0; i < nums.length; i++) {
        let yu = target-nums[i];
        if (nums_json[yu]&&nums_json!==i) {
            arr=[i,nums_json[yu]];
            return arr;
        }
    }
};

let nums = [8,1,5,4,6];
let target = 9;
let arr = twoSum(nums,target);
console.log(arr);
