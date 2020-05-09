# koa
 - node.js   开发框架
 - 轻量级的web开发框架
 - koa  加速了node web 开发  一个web服务就是一个app
 ```javascript
 const Koa = require('koa');   //引入koa模块
 let app = new Koa();
 app.listen(3000);
 ```

 - http.createServer()是node内置的模块，而koa就是将node的这些模块封装起来了
 - http 诞生于1991年(0.9版本)  用于传输学术论文的  基于请求-响应的模式
 - HTTP(web server 应用层协议)  基于TCP