var reverse = function(x) {
    let flag = x<0?-1:1;
    x=x<0?(-1)*x:x;
    let arr = [];
    while(x>0){
        arr.push(x%10);
        x = Math.floor(x/10);
    }
    x=parseInt(arr.join(''))*flag;
    if(parseInt(arr.join(''))*flag>(Math.pow(2,31)*(-1))&&parseInt(arr.join(''))*flag<(Math.pow(2,31)-1)){
        return x;
    }
    else{
        return 0;
    }
};

console.log(reverse(-890));