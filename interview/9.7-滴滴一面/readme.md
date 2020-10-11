# 滴滴一面
 1. 设计模式
  - 订阅发布者模式  MVVM  template  compile    **1-1**   https://juejin.im/post/6844903987024510989#heading-0
  - 代理模式  proxy  defineProperty           **OK**

 2. JS 基础能力题
  - es6
   - 箭头函数
   - let const
   - promise
   - async  await
   - proxy
   - Object.defineProperty
   - map  reduce                            **OK**

  - ajax
   - xhr state  readyState 1 2 3 4
    0	UNSENT	代理被创建，但尚未调用 open() 方法。
    1	OPENED	open() 方法已经被调用。
    2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
    3	LOADING	下载中； responseText 属性已经包含部分数据。
    4	DONE	下载操作已完成。
   - jsonp
   - axios                                  **OK**

  - 手写代码
   - 抄写
   - 实现防抖函数（debounce）                 **2-1**
   - 实现节流函数（throttle）                 **2-2**
   - 实现Event(event emitter)               **OK**
   - 实现instanceOf                         **2-3**
   - 模拟new                                **OK**
   - 实现一个call/apply                      **OK**
   - 模拟Object.create                      **OK**
   - 解析 URL Params 为对象                  **2-4**
   - 深拷贝浅拷贝                            **2-5**

  - 源码分析题
   - React/Vue/Koa  源码实现              

  - 计算机网络
   - http/https
    1. HTTP缺点
     - 通信使用明文，可能被窃听
     - 不验证通信方的身份，可能遭遇伪装
     - 无法证明报文的完整性，有可能遭遇篡改
    2. HTTPS
     - HTTP+加密+认证+完整性保护 = HTTPS
     - HTTP协议采用明文传输信息，存在信息窃听、信息篡改和信息劫持的
       风险，而协议TLS/SSL具有身份验证、信息加密和完整性校验的功能，
       可以避免此类问题发生。
    3. HTTPS的性能损耗
    



  - 工作流机制
   - webpack                              **OK**

  - 浏览器工作原理
   - event loop  +  url  ->  页面显示   V8

   url -> 页面显示
    1、输入网址
    2、DNS解析
    3、建立tcp连接
    4、客户端发送HTTP请求
    5、服务器处理请求　
    6、服务器响应请求
    7、浏览器展示HTML
    8、浏览器发送请求获取其他在HTML中的资源。

  - 介绍自己


# 滴滴二面
 - 算法
  - 快排

 - 项目介绍