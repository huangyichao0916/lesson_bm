/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @return {string}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    // console.log(s);
    // console.log(t);
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return t[i];
        }
    }
    return t.pop();
};

console.log(findTheDifference('asdd','seadd'));