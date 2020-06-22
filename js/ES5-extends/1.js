let fnc = function(){
    this.a = 2;
}
fnc.prototype.x = 1000000;
let obj = new fnc();
console.log(obj.__proto__ === fnc.prototype);
console.log(fnc.prototype.x);
obj.__proto__.x = 1000;
console.log(fnc.prototype.x);
