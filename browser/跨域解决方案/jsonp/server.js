const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.createReadStream('./1.html').pipe(res);
    } else if(req.url.includes('/api')){
        res.end(`foo({code:0,msg:'success'})`)
    }else {
        res.end('');
    }
})
    .listen(8080, () => {
        console.log(8080);
    })