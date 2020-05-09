const Koa = require('koa');   //引入koa模块
const fs = require('fs');
let app = new Koa();

const main = (ctx) => {
    // console.log(ctx);
    // ctx.response.body = 'hello world';
    ctx.response.type = 'html';
    const html = fs.readFileSync('index.html','utf-8');
    ctx.response.body = html;
}
app.use(main);

app.listen(3000);