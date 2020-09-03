## 1
好像是 和 回流有关:
```js
    DomA.style.width = DomA.offsetWidth + 1 + 'px'
    DomB.style.width = DomA.offsetWidth + 1 + 'px'
    DomC.style.width = DomA.offsetWidth + 1 + 'px'
```
复制代码会触发几次回流 ?