// let obj = {
//     a:3,
//     get(){return this.a}
// }
// function hyc(){
//     this.x = 100;
// }
// let obj2 = Object.create(obj)
// obj2.y = 1000;
// let sym = Symbol()
// obj2[sym] = 'sym'
// console.log(obj2.get())
class Hyc{
    constructor(name = 'hyc'){
        this.name = name
    }
    myH(){
        console.log(this.name)
    }
}
let h = new Hyc('asd')
console.log(h.hasOwnProperty('myH'))
console.log(h.hasOwnProperty('name'))
Object.getOwnPropertyNames