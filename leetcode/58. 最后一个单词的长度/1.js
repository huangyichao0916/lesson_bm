/**
 * 
 * @param {string} s 
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    s = s.trim();
    let x = s.split(' ');
    // if (x[0]===s) {
    //     return 0;
    // }
    if (x.length === 0) {
        return 0;
    }
    else{
        return x[x.length-1].length;
    }
};

console.log(lengthOfLastWord(''));