var numberOfSteps  = function(num) {
    let flag = 0;
    while (num!=0) {
        if (num%2===0) {
            num=num/2;
            flag++;
            continue;
        }
        num--;
        flag++;
    }
    return flag;
};