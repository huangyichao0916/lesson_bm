const http = require('http');
const fs = require('fs');
const users = require('./users.json');
// console.log(users);
let version = 1;
http.createServer((req, res) => {
  // If-None-Match
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.createReadStream('index.html').pipe(res);
  } else if (req.url == '/users') {
    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    res.end(JSON.stringify(users)) // 怎么把JSON 传过去? 
  }
}).listen(3000);