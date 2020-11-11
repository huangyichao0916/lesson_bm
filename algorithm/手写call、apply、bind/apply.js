Function.prototype.myApply = function(context){
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context.fnc = this;
    const res = context.fnc(...arguments[1])
    delete context.fnc;
    return res;
}

let obj = {
    x: 3,
}
function hyc(a) {
    console.log(this.x)
    console.log(a)
}
hyc.myApply(obj,[3])