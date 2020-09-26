## JSX
JSX -> React.createElement() -> virtual DOM
setState -> 生成另一棵 虚拟DOM树 -> 使用dom diff(reconciler)找出需要更新的地方 -> 应用更新

## 什么是fiber
-  React 16 中新的协调引擎
- 它的主要目的是使 Virtual DOM 可以进行增量式渲染

## stack reconciler (之前的reconciler)
- 递归的过程，会遍历所有的虚拟DOM节点，如果js执行时间很长，页面会很卡

## fiber reconciler (之后的reconciler)
- 可以终止一项长任务，而去执行一些重要性更高的任务
- 把可中断的任务切片处理
- 调整优先级，重复并复用任务
- 在render阶段，应该无副作用，因为render阶段可能会被react中止，然后重新执行

## 生命周期
1. render阶段 ： 算出那些地方需要更新
2. commit阶段 ： 之前render已经花了很多时间，为了让用户尽快看到页面，这个阶段会一气呵成

## fiber
- 一种数据结构，支持中止，暂停，重新启动
- 以单链表的形式表达一棵树
- 以循环的方式遍历树
- fiber会记住当前遍历到了哪个节点，然后就可以去做其他事情了