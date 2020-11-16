const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.createReadStream('./1.html').pipe(res);
    } else if (req.url.includes('/api')) {
        const callBackName = req.url.match(/callback\=(\w+)/) ? req.url.match(/callback\=(\w+)/)[1] : null;
        res.end(`${callBackName}({code:0,msg:'success'})`)
        // res.end('asdasd')
    } else {
        res.end('');
    }
})
    .listen(8080, () => {
        console.log(8080);
    })