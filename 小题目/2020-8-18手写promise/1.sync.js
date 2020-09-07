function MyPromise(fn){
    function resolve(value){
        console.log(1)
    }
    function reject(){

    }
    fn(resolve,reject)
}
MyPromise.prototype.then = function(onFulfilled,onRejected){

}

new MyPromise((resolve,reject) => {
    resolve(1);
})
.then(res => {
    console.log(res)
},() => {})