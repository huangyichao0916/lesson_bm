const fs = require('fs');
const koa = require('koa');
const app = new koa();
const KoaStatic = require('koa-static');

const main = ctx => {
    if (ctx.request.url === '/ch.jpeg') {
        ctx.response.type = 'image';
        ctx.response.body = fs.createReadStream('ch.jpeg');
    }else if (ctx.request.url === '/style.css') {
        ctx.response.type = 'css';
        ctx.response.body = fs.createReadStream('style.css');
    }else{
        ctx.response.type = 'html';  //响应头
        ctx.response.body = fs.createReadStream('index.html');
    }
}

// app.use(main);
app.use(KoaStatic('./'));
app.listen(8080);