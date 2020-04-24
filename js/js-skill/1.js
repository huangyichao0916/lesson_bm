/**
 * 
 * @param {Object} obj 
 * @return {Object}
 */
let copyObject = function(obj){
    let objCopy = {};
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            objCopy[key] = obj[key];
        }
        else{
            objCopy[key]=copyObject(obj[key]);
        }
    }
    return objCopy;
}
let obj1 = {
    sh:'sdjs',
    xx:{
        x:20
    }
}
let obj2 = copyObject(obj1);
obj1.xx.x = 50;
console.log(obj1);
console.log(obj2);
