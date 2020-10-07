//时间戳版
function throttle1(func:Function,wait:number) {
    let previous:number = 0;
    return function () {
        let now:number = Date.now();
        if (now - previous > wait) {
            func.apply(this,arguments)
            previous = now;
        }
    }
}


function throttle2(func:Function,wait:number) {
    let canExcute:boolean = true;

    return function () {
        if (canExcute) {
            func.apply(this,arguments)
            canExcute = false;
            setTimeout(() => {
                canExcute = true;
            }, wait);
        }
    }
}