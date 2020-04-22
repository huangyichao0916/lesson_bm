/**
 * 
 * @param {number} num 
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    let t = Math.floor(Math.sqrt(num));
    let sum = 1;
    for (let i = 2; i <= t; i++) {
        if ((num/i)%1===0) {
            sum = sum + (num/i) + i;
        }
    }
    if (sum ===num) {
        return true;
    }
    else{
        return false;
    }
};