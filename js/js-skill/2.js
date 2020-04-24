// let arr =[];
// let sh = [1,2,3];
// arr.push(...sh);
// console.log(arr);

let copyArray = function(arr){
    let arrCopy = [];
    arr.forEach(element => {
        if (typeof element !=='object') {
            arrCopy.push(element);
        }
        else{
            arrCopy.push(...copyArray(element));
        }
    });
    return arrCopy;
}

let arr = [1,2,[1,2,3,[1,2,6]]];
console.log(arr);
console.log(copyArray(arr));