## 函数式编程
- 不可变
- 纯函数

## immutable
- 有的时候数据比较复杂，浅拷贝只会把复杂数据的地址拷贝过来，而深拷贝性能又不强。
- 结构共享：如果某些地方没有更新，则会指向原来的地址
- Map只会转换最外层的数据，深层转化要使用 fromJS
- immutable不会改变原来的数据，而是每次返回新的数据
- Map会把JS的数组变成一种叫list的数据类型，list也可以用map来循环。