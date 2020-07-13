## 生命周期3个阶段
 1. 初始化渲染  render  componentDidMount
 2. 更新阶段    shouldComponentUpdate  render  componentDidUpdate
 3. 卸载       componentWillUnMount

## hooks
 - hooks只能在函数组件中使用
 - 不能出现在任何逻辑判断里面，只能写在最顶层

 1. useState
 2. useEffect
 3. useMemo         将一些不变的东西放到缓存里面，这样每次重新执行函数的时候就不用重新定义了
                    useMemo只能缓存值
 4. useCallback     可以缓存函数