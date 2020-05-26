const http = require('http');

http.createServer((req,res) => {
    res.end('OK');
})
.listen(8088,() => {
    console.log(8088);
});