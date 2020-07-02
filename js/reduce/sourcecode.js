Array.prototype.myReduce = function(fnc,initialValue){
    let arr = this;
    let pre = initialValue ? initialValue : arr[0];
    let i = initialValue ? 0 : 1;
    // let cur,index;
    for (; i < arr.length; i++) {
        pre = fnc(pre,arr[i],i,arr);
    }
    return pre;
}

let testArr = [1,4,5,2];

console.log(testArr.reduce(function (pre , cur) {
    return pre + cur;
},100))
console.log(testArr.myReduce(function (pre , cur) {
    return pre + cur;
},100))