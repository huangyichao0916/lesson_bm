##  1 tab之间的通信
// https://segmentfault.com/a/1190000011207317

https://zhuanlan.zhihu.com/p/29368435

1. localStorage
 - 监听storage的变化，一旦变化，就触发回调
 ```js
    window.addEventListener("storage", function (ev) {
      console.log(ev);
      if (ev.key == 'message') {
        // removeItem同样触发storage事件，此时ev.newValue为空
        if (!ev.newValue)
          return;
        var message = JSON.parse(ev.newValue);
        console.log(message);
      }
    });
 ```

2. postMessage
 - 必须要a页面打开b页面，否则不起作用

3. 轮询
 - 对后端的要求比较高

## 2 
```js
    Object.prototype.a = 'Object';
    Function.prototype.a = 'Function';
    function Person(){};       
    var child = new Person();
    console.log(Person.a); 
    console.log(child.a); 
    console.log(child.__proto__.__proto__.constructor.constructor.constructor);
```