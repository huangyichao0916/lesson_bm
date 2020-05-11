const fs = require('fs');
const koa = require('koa');
const app = new koa();

const main = ctx => {
    ctx.response.type = 'html';  //响应头
    ctx.response.body = fs.createReadStream('index.html');
}

app.use(main);
app.listen(8080);