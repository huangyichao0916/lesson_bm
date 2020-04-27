/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let arr = [];
    for (let i = 0; i < Math.pow(10,n)-1; i++) {
        arr[i] = i+1;
    }
    return arr;
};
printNumbers(1);