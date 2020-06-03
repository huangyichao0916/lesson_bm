## CSS布局
- 默认以baseline对齐

## baseline
inline没有任何文字的时候，baseline在底部，img以baseline对齐

## position
absolute和fixed会脱离文档流
absolute相对于包含块定位(containing block)

## 怎么确定 containing block

确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

1. 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块级元素（比如说inline-block, block 或 list-item元素）
2. 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素。
3. 如果 position 属性是 fixed，是 viewport,
4. 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的/最近/祖先元素的内边距区的边缘组成的：
  - transform / perspective 不是 none
  - will-change 是 transform， perspective
  - filter不是 none 或者 will-change 是 filter(only works on Firefox).
  - contain 是 paint (例如: contain: paint;)