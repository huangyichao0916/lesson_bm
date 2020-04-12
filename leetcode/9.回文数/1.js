var isPalindrome = function(x) {
    if ((x%10===0&&x!==0)||x<0) {
        return false
    }
    let y = x.toString().split('').reverse().join('');
    y = parseInt(y);
    return y===x;
};
console.log(isPalindrome(-12321));