Array.prototype.myForEach = function (func) {
    if (typeof func !== 'function') {
        throw new Error('please pass a function as a param')
    }
    const curErr = this;
    for (let i = 0; i < curErr.length; i++) {
        func(curErr[i],i)
    }
}

let a = [1,3,5,{a:2},'sda']
a.myForEach(console.log)