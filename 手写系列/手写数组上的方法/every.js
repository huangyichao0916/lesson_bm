Array.prototype.myEvery = function (func) {
    if (typeof func !== 'function') {
        throw new Error('please pass a function as a param')
    }
    const curArr = this;
    for (let i = 0; i < curArr.length; i++) {
        if (!func(curArr[i])) {
            return false
        }
    }
    return true;
}