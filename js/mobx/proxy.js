let obj = {
    a: 1,
    b: 2,
}
// let pObj = new Proxy(obj,{
//     set(){
//         console.log('set')
//     },
//     get(){

//     }
// })
Object.defineProperty(obj,'ad',{
    get(){
        
    }
})
console.log(obj === p)