# loaclStorage
 - 永远不会消失
 - 一直存在着

# sessionStorage
 - 会话储存
 - 关掉浏览器之后就会消失

# cookie

 name: value
 domain: cookie 生效的域名
 path: 生效的路径
 expires: 过期事件
 httpOnly: cookie只在http的环境下生效，js无法操作
 set-cookie: 响应头设置
 secure: 只在https的环境下生效
 sameSite: lax()  strict(只在同域生效)  none

- cookie只要符合domain + path，就会随着http请求发送CSRF