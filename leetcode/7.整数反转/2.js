var reverse = function(x) {
    let flag=1;
    let arr= [];
    if (x<0) {
        flag=-1;
        x=x*-1;
    }
    x=x.toString();
    for (let i = 0; i < x.length; i++) {
        arr.unshift(x[i]);
    }
    x=parseInt(arr.join(''))*flag;
    if (x>(Math.pow(2,31)*-1)&&x<Math.pow(2,31)-1) {
        return x;
    }
    else{
        return 0;
    }
};
console.log(reverse(-89));