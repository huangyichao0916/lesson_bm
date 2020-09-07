let obj = {
    a: '1',
    b:{
        c:2,
    },
    d:[1,2,3],
}

Object.defineProperty(obj,'a',{
    get:function(){
        console.log('get value')
        return val;
    },
    set:function(newVal){
        console.log('change value')
        val = newVal;
    }
})

obj.a = 2;
console.log(obj.a)