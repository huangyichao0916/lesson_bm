Array.prototype.myReduce = function (func) {
    if (typeof func !== 'function') {
        throw new Error('please pass a function as a param')
    }
    const curArr = this;
    let pre = curArr[0];
    let start = 1;
    if (arguments[1]) {
        start = 0;
        pre = arguments[1]
    }
    for (let i = start; i < curArr.length; i++) {
        pre = func(pre,curArr[i],i,curArr)
    }
    return pre;
}
// const midwares = [
//     function(fnc){
//         console.log(1)
//         return () => {
//             console.log(111)
//             fnc()
//         }
//     },
//     function(fnc){
//         console.log(2)
//         return () => {
//             console.log(222)
//             fnc()
//         }
//     },
//     function(fnc){
//         console.log(3)
//         return () => {
//             console.log(333)
//             fnc()
//         }
//     }
// ]

// //用reduce实现
// const compose = function (funcs) {
//     return funcs.reduce((pre,cur) => {
//         return (...args) => pre(cur(...args))
//     })
// }
// const fncOne = compose(midwares)(() => console.log('inner'))
// fncOne()