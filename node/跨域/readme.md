## 跨域
- 跨域是浏览器的安全策略，在服务端就没有这套安全限制了
- 满足同一个端口，同一个协议，同一个域名才能跨域

- 跨域请求被block解决办法
    1. 在响应头中配置 Access-Control-Allow-Origin(允许通过的源)
    2. 在响应头中配置 Access-Control-Allow-Headers(允许通过的请求头)
    3. Access-Control-Allow-Methods
    4. Access-Control-Allow-Credentials     值为true或者false  允许或者拒绝前端请求的时候带有cookie



- content-type是通用头，前端后端都能用。
- cookie随着http请求一起发送，cookie只在域名下面生效

- 简单请求会直接发出请求，非简单请求会发送一个preflight预检请求，这个预检请求是以OPTIONS的形式发送的