let http = require('http');

// http协议是web编程的基础

http.createServer((req,res) => {
    
    res.writeHead(204,{'content-type' : 'text/html;charset = utf-8'});
    res.write('hello');
    res.end(`
        <html>
            <head></head>
            <body>
                <a href="/newpage">go to the new page</a>
            </body>
        </html>
    `)
}).listen(3001);