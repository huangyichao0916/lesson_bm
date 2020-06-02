# 主题      react-beer 应用开发思路整理

1. 路由设计，URL设计,把应用架构搭好，先把页面搭起来
2. localStorage的使用，优化性能


# Tips

1. 路由变化后，页面会重载，componentDidMount函数也会重新执行
2. 有的时候路由的参数变化了，但是路由不变，这个时候componentDidMount不会重新执行,但是componentDidUpdate
   函数会重新执行


http://localhost:3000/beer/sd/asdasd

http://localhost:3000/