Array.prototype.myFilter = function (func) {
    if (typeof func !== 'function') {
        throw new Error('please pass a function as a param')
    }
    const resArr = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            resArr.push(this[i])
        }
    }
    return resArr;
}