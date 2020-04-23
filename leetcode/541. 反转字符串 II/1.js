/**
 * 
 * @param {string} s 
 * @param {number} k 
 */
var reverseStr = function (s, k) {
    if (k === 1) {
        return s;
    }
    let str = '';
    let j = 0;
    let cycle_index = Math.ceil(s.length / (2 * k));
    for (let i = 0; i < cycle_index; j = j + 2 * k, i++) {
        str = str + s.slice(j, j + k).split('').reverse().join('') + s.slice(j + k, j + k + k);
    }
    return str;
};