## 怎么触发BFC
- 只要元素满足下面任一条件即可触发 BFC 特性：

1. body、根元素
2. 浮动元素：float 除 none 以外的值
3. 绝对定位元素：position (absolute、fixed)
4. display 为 inline-block、table-cells、flex
5. overflow 除了 visible 以外的值 (hidden、auto、scroll)

