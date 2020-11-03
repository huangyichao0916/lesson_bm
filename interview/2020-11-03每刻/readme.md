1. 获取对象上面的可遍历属性
 - Object.getOwnPropertyNames()
 - Object.getOwnPropertySymbols()
 - for in会遍历到原型链上面的属性(切记)
2. 你知道BOM吗
 - BOM是浏览器提供的一系列操作浏览器窗口的API
 - history.__proto__.go(),history.__proto__.forward(),history.__proto__.back()
 - 
3. 怎么知道目前是什么浏览器
 - window.navigator.userAgent
4. js的Number格式是有误差的，怎么解决
 ```js
    console.log(Number.EPSILON)   //2.220446049250313e-16
 ```
5. js怎么四舍五入
 ```js
    Math.toFixed(n)  //保留n位小数
    Math.round()     //取整
 ```