 ### 当点击a标签时，如何不跳转
  - event.preventDefault();

  - res.writeHead(307);
    status-code : 307   重定向

  - 1xx     正在处理中
    2xx     成功
    3xx     跳转
    4xx     客户端错误
    5xx     服务器端错误

  - localStorage
    可以存关键css代码，下次打开的时候就可以省时间