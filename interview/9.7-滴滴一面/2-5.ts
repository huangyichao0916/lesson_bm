//递归实现深拷贝  但是未解决循环引用的问题
function deepCopy(obj: any) {
    // const map:Map<any,any> = new Map();

    function helper(myObj: any) {
        if (typeof myObj !== 'object') {
            return myObj;
        }
        const isArr: boolean = Array.isArray(myObj)
        const resObj: any = isArr ? [] : {};
        // if (map.get(myObj)) {
        //     return
        // }
        // map.set(myObj,true)

        if (isArr) {
            for (let i = 0; i < myObj.length; i++) {
                const element = myObj[i];
                resObj[i] = deepCopy(element)
            }
        } else {
            for (const key in myObj) {
                resObj[key] = deepCopy(myObj[key])
            }
        }
        return resObj;
    }

    return helper(obj)
}
// let a = {
//     a: 3,
//     b: {
//         a: 3,
//         c: 5
//     }
// }
// let b = deepCopy(a)
// console.log(a)
// console.log(b)
// console.log(a.b == b.b)



//解决了循环引用的问题
function deepCopy2(obj) {
    const map = new Map();

    function helper(myObj) {
        if (typeof myObj !== 'object') {
            return myObj;
        }
        if (map.get(myObj)) {
            return map.get(myObj)
        }
        const isArr = Array.isArray(myObj)
        const resObj = isArr ? [] : {};
        map.set(myObj, resObj)

        if (isArr) {
            for (let i = 0; i < myObj.length; i++) {
                const element = myObj[i];
                resObj[i] = helper(element)
            }
        } else {
            for (const key in myObj) {
                resObj[key] = helper(myObj[key])
            }
        }
        return resObj;
    }

    return helper(obj)
}
let obj2: any = {
    b: 3,
    c: {
        a: {
            a: 3,
            x: 3
        }
    }
};
let xxx: any = obj2;
obj2.b = xxx;
let objj: any = deepCopy2(obj2)
console.log(obj2)




// JSON.stringify + JSON.parse实现深拷贝
function deepCopy3(obj: any) {
    return JSON.parse(JSON.stringify(obj))
}

let obj: any = {
    b: {
        a: 1,
        c: 3,
    },
    c: {
        a: {
            a: 3,
            x: 3
        }
    }
}
// let obj2:any = deepCopy3(obj)
// console.log(obj2.c == obj.c)