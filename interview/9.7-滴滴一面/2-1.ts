function debounce(func:Function,wait) {
    let timeout:number|null = null;

    return function(){
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            func.apply(this,arguments)
        }, wait);
    }
}

function debounce2(func:Function,wait:number) {
    let timeout:number|null = null;

    return function () {
        let callNow:boolean = !timeout;

        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            timeout = null;
        }, wait);

        if (callNow) {
            func.apply(this,arguments)
        }
    }
}