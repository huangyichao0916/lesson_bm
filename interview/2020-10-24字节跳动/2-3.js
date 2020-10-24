function fnc(arr){
    arr.sort((a,b) => a - b)
    let obj = {};
    arr.forEach(item => {
        if (obj[item]) {
            obj[item]++;
        }else{
            obj[item] = 1;
        }
    })
    const resArr = [];
    Object.keys(obj).forEach(item => {
        resArr.push(item,obj[item].toString())
    })

    return resArr;
}

console.log(fnc(["a","a","b","b","c"]))