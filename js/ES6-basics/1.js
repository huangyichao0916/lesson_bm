function sum(){
    let sum = 0;
    Array.prototype.forEach.call(arguments,(item)=>{
        sum += item;
    })
    return sum;
}
console.log(sum(1,2,46,3));