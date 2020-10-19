# 请求头
1. content-type
 - Content-Type表示请求头或响应头的内容类型。作为请求头时，利用它可以进行body-parser。 
 - 根据不同的类型进行相应数据处理
2. range
3. Cache-Control与Expires之强制缓存  If-Modified-Since Last-Modified Etag If-None-Match 之协商缓存
 - Cache-Control: 该值是利用max-age判断缓存的生命周期，是以秒为单位，如何在生命周期时间内，则命中缓存
 - Expires: 该值是一个GMT时间格式个字符串，浏览器进行第一次请求时，服务器会在返回头部加上Expires，下次请求，如果在这个时间之前则命中缓存，
 - Last-Modified： 表示为为实体头部部分，response返回，表示为资源的最后更新时间 
 - If-Modified-Since：通过比较两次的时间判断，资源在请求期间是否有修改，假如没有修改，则命中协商缓存，浏览器从
   缓存中读取资源，如果没有命中，资源有过修改，返回新的Last-Modified时间和服务器资源
 - Etag: 为相应头部字段，表示资源内容的唯一标识，随服务器response返回
 - If-None-Match: 服务器比较请求头中的If-None-Match和当前资源中的etag是否一致，来判断资源是否修改过，如果没
   有修改，则命中缓存，浏览器从缓存中读取资源，如果修改过，服务器会返回新的etag，并返回资源；
4. Accept-Encoding
5. referer
6. Accept-Language