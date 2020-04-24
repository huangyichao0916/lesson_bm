/**
 * 
 * @param {string[]} strs 
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[0].length && j < str.length; j++) {
            if (str[j] !== strs[i][j]) {
                str = str.slice(0,j);
                break;
            }
        }
    }
    return str;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));