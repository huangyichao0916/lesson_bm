let arr = [1,2,3];
let str = '1asfga';
console.log(Math.max(...arr));
let arr1 = [...str];
console.log(arr1);
let sh = {
    h:123,
    w:'asd',
}
sh.fnc = function(){
    console.log(this.w);
}
sh.fnc();