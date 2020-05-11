const http = require('http');
const fs = require('fs');
const request = require('request');

request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'))

http.createServer((req, res) => {
  // GET
  // juejin.com/serch?type=all&query=js
  // 后端会 接受
  // 前端 type=all&query=js 当做流的方式传过来 后端
  // console.log(req);
  // 头部：content-type
  // 
  // GET: 数据 放到 url
  // POST：数据 放到 body
  // http://localhost:8088/?type=all&query=js
  const writeStream = fs.createWriteStream('./params.txt');
  // postman 以 post 提交过来的数据 保存搭配 params.txt 里面
  req.pipe(writeStream);
  res.end('ok');
})
.listen(8088, () => {
  console.log('8088');
})