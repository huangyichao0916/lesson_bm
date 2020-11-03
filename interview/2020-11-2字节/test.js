let a = new Array()
console.log(a instanceof Array)
a.__proto__ = null;
console.log(a instanceof Array)
console.log(typeof a)
console.log(Array.isArray(a))
console.log(Array.isArray(Array.prototype))

let x = Symbol()
console.log(typeof x)