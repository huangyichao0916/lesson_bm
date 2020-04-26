/**
 * 
 * @param {number[]} digits 
 * @return {number[]}
 */
var plusOne = function (digits) {
    //让i为digits数组最后一个元素的坐标
    let i = digits.length - 1;
    digits[i]++;
    for (; i > 0; i--) {
        if (digits[i] === 10) {
            digits[i] = 0;
            digits[i - 1]++;
            continue;
        }
        else{
            break;
        }
    }
    if (i===0) {
        if (digits[i]===10) {
            digits[i]=0;
            digits.unshift(1);
        }
    }
    return digits;
};
console.log(plusOne([1,9]));