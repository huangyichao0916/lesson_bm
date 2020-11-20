function toSnakeCase(obj) {
    const arr = Object.keys(obj);
    const arr2 = arr.map(i => {
        i = i.replace(/^([A-Z]|[a-z])[a-z]*/, (n1, n2) => {
            n2 = n2.toUpperCase();
            return n2 + n1.slice(1)
        })
        i = i.replace(/[A-Z][a-z]*/g, n1 => {
            n1 = n1.toLowerCase()
            return '_' + n1
        })
        return i.slice(1)
    })
    const obj2 = {};
    for (let i = 0; i < arr.length; i++) {
        if (typeof obj[arr[i]] === 'object') {
            obj[arr[i]] = toSnakeCase(obj[arr[i]])
        }
        obj2[arr2[i]] = obj[arr[i]];
    }
    return obj2;
}



let obj = {
    UserName: 'toutiao',
    Group: {
        groupName: 'douyin'
    }
}
function snakeCase(obj) {
    let str = JSON.stringify(obj)
    const reg = /(?<=\")([a-zA-Z])+(?=\"\:(\"|\{))/g;
    str = str.replace(reg,n1 => {
        n1 = n1[0].toUpperCase() + n1.slice(1)
        // console.log(n1)
        n1 = n1.replace(/[A-Z][a-z]*/g,p1 => {
            p1 = '_' + p1.toLowerCase()
            return p1;
        })
        // console.log(n1.slice(1))
        return n1.slice(1)
    })
    return JSON.parse(str)
}
console.log(snakeCase(obj))
// console.log(toSnakeCase(obj))