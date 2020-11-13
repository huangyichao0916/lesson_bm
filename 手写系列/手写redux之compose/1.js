const midwares = [
    function(fnc){
        console.log(1)
        return () => {
            console.log(111)
            fnc()
        }
    },
    function(fnc){
        console.log(2)
        return () => {
            console.log(222)
            fnc()
        }
    },
    function(fnc){
        console.log(3)
        return () => {
            console.log(333)
            fnc()
        }
    }
]

//用reduce实现
const compose = function (...funcs) {
    return funcs.reduce((pre,cur) => {
        return (...args) => pre(cur(...args))
    })
}

// const fncOne = compose(...midwares)(() => console.log('inner'))
// fncOne()

//用for循环实现
const composeTwo = mids => {
    const copyMids = [];
    copyMids[1] = (...args) => mids[0](mids[1](...args))
    for (let i = 2; i < mids.length; i++) {
        copyMids[i] = (...args) => copyMids[i - 1](mids[i](...args))
    }
    return copyMids[copyMids.length - 1];
}

const fncTwo = composeTwo(midwares)(() => console.log('inner'))
fncTwo()