# loaclStorage
 - 永远不会消失
 - 一直存在着
 - 储存容量上限大概为5Mb

# sessionStorage
 - 会话储存
 - 关掉tab之后就会消失

# cookie
- 储存容量上限比较小，只有几 kb

- 一些属性
 name: key
 value: value
 domain: cookie 生效的域名,跨域限制
 path: 生效的路径，如果是根路径，那么在当前域名下都生效
 expires: 过期的时间(生命周期)，默认为当前时间，就是关掉了tab就失效了
 httpOnly: cookie只在http的环境下生效，js无法操作
 set-cookie: 响应头设置
 secure: 只在https的环境下生效
 sameSite: lax()  strict(只在同域生效)  none

- cookie只要符合domain + path，就会随着http请求发送CSRF