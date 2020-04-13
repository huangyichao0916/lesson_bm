var reverseLeftWords = function(s, n) {
    let arr = s.split('');
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    return arr.join('');
};
console.log(reverseLeftWords('hyc',1));