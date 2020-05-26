const koa = require('./lib/application');

const app = new koa();

//ctx是上下文的意思，是req和res的结合体
app.use((req,res) => {
    res.end('hello');
})

app.listen(3000 , () => {
    console.log('在3000端口中启动')
});