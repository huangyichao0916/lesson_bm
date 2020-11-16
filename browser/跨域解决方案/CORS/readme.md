## CORS 跨域资源共享
- 它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制
- 2种请求：简单请求、非简单请求
 1. 简单请求
  只要同时满足以下两大条件，就属于简单请求：
  (1) 请求方法是以下三种方法之一：
   - HEAD
   - GET
   - POST
  (2) HTTP的头部信息不超过以下几种字段：
   - Accept
   - Accept-Language
   - Content-Language
   - Last-Event-ID
   - Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

- 简单请求，对于简单请求，浏览器直接发出CORS请求，浏览器会在头信息中加入一个**Origin**字段,Origin字段用来说
  明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。Origin字段用来说明，本次
  请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。
  1. 如果Origin不再许可范围内，服务器返回一个正常的HTTP回应，但是这个HTTP响应头不带**Access-Control-Allow-Origin**，
     客户端就判断出错了

- 非简单请求：非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。
 1. 对于非简单请求，服务器会发出一个预检请求，使用的方法是OPTIONS，预检请求包含两个特殊字段
 2. 一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的
    回应，也都会有一个Access-Control-Allow-Origin头信息字段。