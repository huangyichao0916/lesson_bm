var fib = function(N) {
    if (N<=1) {
        return N;
    }
    let pre = 1;
    let prepre = 0;
    let r = 0;
    for (let i = 2; i <= N; i++) {
        r = pre + prepre;
        prepre = pre;
        pre = r;
    }
    return r;
};
console.log(fib(2));