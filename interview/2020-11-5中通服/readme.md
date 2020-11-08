1. 浏览器tab之间的通信
 - postMessage
 - 监听localStorage(必须要在两个tab同源的情况下才能监听localStorage)
2. window.open怎么传递信息
 - 
3. generator以及用法
4. 伪类和伪元素的区别
 - 伪类的核心就是用来选择那些不能够被普通选择器选择的文档之外的元素，如:hover
 - 伪元素就是用来选那些文档中不存在的元素，如:  ::after
5. 怎么跨域
 - JSONP
 - CORS
 - postMessage
 - Nginx反向代理
6. 项目难点
7. cookie,sessionStorage,localStorage，他们的容量分别有多大
 - 每个cookie最大是4Kb
 - sessionStorage和localStorage一般为5Mb
8. 防抖和节流是什么，举个例子
 - 防抖
  1. 可以用来处理input框的搜索联想
  2. 用来处理window.resize
 - 节流
  1. 可以用在滚动条的监测上
  2. 鼠标不断点击触发的事件也可以用来监测