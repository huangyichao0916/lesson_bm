const http = require('http');
const fs = require('fs');


http.createServer((req,res) => {
    // let stat = fs.statSync('a.text');
    // console.log(stat);
    res.setHeader('Etag','hhyc');
    fs.createReadStream('index.html').pipe(res);
}).listen(3000);