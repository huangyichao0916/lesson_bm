- react会把所有用react语法写出来的事件绑定到document上面，所以有的时候并不能达到预期的效果
- e.stopPropagation()也是react自己实现的方法，这个方法仅生效于react的事件,对原生的js事件，它是不生效的
- react自己会判断哪一个DOM节点的回调会被执行
- 要注意混合绑定时，事件的执行顺序