# 浏览器的history对象
## API
1. History.pushState(state, title, url)
 - 添加一项历史记录
 - 浏览器在当前页面打开链接
 - state可以在下一个页面取到
2. History.replaceState()
 - 重定向的时候使用
 - 更新历史栈上最新的入口

## 一些属性
1. History.length
 - 所有的操作过的记录的个数