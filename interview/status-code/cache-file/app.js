const http = require('http');
let version = 12345679;
let server = http.createServer((req, res) => {
  // If-None-Match
  if (req.headers['if-none-match']) {
    // console.log(Number(req.headers['if-none-match']) == version);
    if (Number(req.headers['if-none-match']) == version) {
      res.statusCode = 304 // 没有改变版本
      res.end();
      return;
    } else {
      res.setHeader('Etag', version);
      res.end('hello, world2');
      return
    }
  }
  res.setHeader('Etag', version);
  res.end('hello, world');
});


server.listen(3333);