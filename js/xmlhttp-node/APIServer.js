const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        const html = fs.readFileSync('./index.html', 'utf8');
        res.end(html);
    } 
    else if (req.url === '/getPosts') {
        let posts = [
            { title: '121', star: 1000 },
            { title: 'hyc', star: 2000 }
        ]
        let str = '';
        req.on('data', function (chunk) {
            str += chunk;
        })
        req.on('end', function () {
            console.log('服务器输出了：',JSON.parse(str));
        })
        // req res 流
        res.end(JSON.stringify(posts));
        // 前端提交数据 解析
    }
    // console.log(req.url);
    // // if (req)
    // res.end('hello server');
})
//开始监听9091端口
server.listen(9091, function () {
    console.log('server is running 9090');
})