## react的key
1. react的key有增加性能的作用
2. react会复用之前的节点
3. key为1，那么当前节点会使用上次key为1的节点的内容

- 涉及到排序的话，最好在数据源里面加入id，否则可能会带来意想不到的错误


## react性能优化
1. shouldComponentUpdate
2. PureComponent
3. React.memo
4. ErrorBoundary