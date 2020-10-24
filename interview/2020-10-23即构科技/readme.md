1. instanceof
 ```js
  console.log(0 instanceof Number)
 ```
 - 输出为false，因为0并不是通过Number函数构造出来的
 - 只有对象 instanceof 对应的构造函数才会输出true
 ```js
    let arr = []
    console.log(arr instanceof Array)//true

    console.log(String instanceof Object) //true
    console.log(String instanceof Function)//true

    console.log(Object instanceof Object)//true
    console.log(Function instanceof Function)//true

    console.log(Object instanceof Function)//true
    console.log(Function instanceof Object)//true

    console.log(1 instanceof Object)//true
 ```

2. 对象的key问题
 ```js
    let a = {
        x: 3,
        y: 4,
    }
    let b = {
        q: 1,
        z: 3,
    }
    let f = [1,2,3]
    let c = {};
    console.log(c) //{}
    c[a] = 'a';
    c[f] = 'f';
    c[b] = 'b';
    console.log(c) //{ '[object Object]': 'b', '1,2,3': 'f' }
 ```
 - 如果将复杂数据类型作为对象的key值，那么内部就会对这个key值进行 toString的转化，变成
   字符串，然后就可以作为key值了

3. 输入URL到页面展示发生了什么