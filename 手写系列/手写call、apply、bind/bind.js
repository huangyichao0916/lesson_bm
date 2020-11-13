Function.prototype.myBind = function (context,...args) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    const fnc = this;

    return function resFnc() {
        if (this instanceof resFnc) {
            return new fnc(...arguments)
        }
        return fnc.call(context,...args,...arguments)
    }
}

let obj = {
    x: 3,
}
function hyc () {
    console.log(this.x)
}
hyc.bind(obj)()