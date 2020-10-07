# typeof
## 原理
- 不同的对象在底层都表示为二进制，在Javascript中二进制**前（低）三位**存储其类型信息。

000: 对象
010: 浮点数
100：字符串
110： 布尔
1： 整数

typeof null 为"object", 原因是因为 不同的对象在底层都表示为二进制，在Javascript中
二进制**前（低）三位**都为0的话会被判断为Object类型，null的二进制表示全为0，自然前三位也是
0，所以执行typeof时会返回"object"。
**二进制中的“前”一般代表低位， 比如二进制00000011对应十进制数是3，它的前三位是011。**

# instanceof
- instanceof运算符只能用于对象，不适用原始类型的值。

## .__proto__属性
- 和.construtor一样，__proto__实际上并不存在于你正在使用的对象(本例中是a)。实际上，它和其他
的常用函数（.toString()、.isPrototypeOf(...)，等等 一样，存在于内置的Object.prototype中。
（它们是不可枚举的
- 此外，.__proto__看起来很像一个属性，但是实际上它更像一个 getter/setter。 .__proto__的实现大致是这样的
```js
Object.defineProperty(Object.prototype, "__proto__", {
    get: function() {
        return Object.getPrototypeOf(this);
    },
    // ES6中的Object.setPrototypeOf
    set: function(o) {
        Object.setPrototypeOf(this, o);
        return o;
    }
})
```

## instanceof 代码实现
```js
function myInstanceof(L,R) {
    let protoR = R.__proto__;
    let protoL = L.__proto__;

    while (true) {
        if (protoL = null) {
            return false;
        }
        if (protoL = protoR) {
            return true;
        }
        protoL = protoL.__proto__;
    }
}
```