## 传递参数的方法
- 被打开来的窗口可以拿到父窗口的window对象，并且可以使用上面的属性
```js
    const opener = window.opener;
    opener.postMessage('i am the one')

    console.log(opener.val)
```