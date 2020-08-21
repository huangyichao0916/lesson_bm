const Koa = require('koa');
const KoaViews = require('koa-views');
const Router = require('koa-router');
const path = require('path');

const app = new Koa();

app.use(KoaViews(path.resolve(__dirname,'./views'),{
    extension: 'ejs',
}))

const router = Router();
router.get('/',async (ctx) => {
    await ctx.render('index',{
        username: 'lihua',
    })
})

app
    .use(router.routes())
    .use(router.allowdMethods())