/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let flag = {};
    let sh = {};
    nums1.forEach((item,index) => {
        sh[item] = index;
    })
    nums2.forEach((item) => {
        if (sh[item] !== undefined) {
            flag[item] = item;
        }
    })
    console.log(sh);
    console.log(flag);
    sh = [];
    for (const key in flag) {
        sh.push(flag[key]);
    }
    return sh;
};
[4,9,5]
[9,4,9,8,4]

console.log(intersection([4,9,5],[9,4,9,8,4]));