Function.prototype.myCall = function(context,...args){
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    context.fnc = this;
    const res = context.fnc(...args)
    delete context.fnc;
    return res;
}
// console.log(Function.prototype.myCall.name)
let obj = {
    x: 3,
}
function hyc() {
    console.log(this.x)
}
hyc.myCall(obj)