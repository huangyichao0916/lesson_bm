var reverse = function(target) {
    let isNegative = target<0?true:false;
    target = (isNegative?-target:target).toString().split('').reverse().join('');
    target = parseInt(target);
    target = isNegative?-target:target;
    if (target>(Math.pow(2,31)*-1)&&target<Math.pow(2,31)-1) {
        return target;
    }
    else {
        return 0;
    }
};
console.log(reverse(-89));