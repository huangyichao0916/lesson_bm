// function deepCopy(obj1) {
//     var obj2 = Array.isArray(obj1) ? [] : {};
//     if (obj1 && typeof obj1 === "object") {
//         for (var i in obj1) {
//             if (obj1.hasOwnProperty(i)) {
//                 // 如果子属性为引用数据类型，递归复制
//                 if (obj1[i] && typeof obj1[i] === "object") {
//                     obj2[i] = deepCopy(obj1[i]);
//                 } else {
//                     // 如果是基本数据类型，只是简单的复制
//                     obj2[i] = obj1[i];
//                 }
//             }
//         }
//     }
//     return obj2;
// }

//递归实现深拷贝  用map来避免相互引用造成死循环的问题
function deepCopy(obj:any) {
    const map:Map<any,any> = new Map();

    function helper(myObj:any) {
        map.set(myObj,true)
    }
}


// JSON.stringify + JSON.parse实现深拷贝