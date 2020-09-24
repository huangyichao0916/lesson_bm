# Node面试准备

## 1. mongoose的model的CRUD操作

- C - create
  - Model.create(文档对象, 回调函数)  返回值为undefined
  - Model.create(文档对象)  返回值为promise
- R - read
  - Model.find(查询条件[, 投影], 回调函数)
  - Model.find(查询条件[, 投影])
  - Model.findOne(查询条件[, 投影])
  - 操作符：
    1. < <= > >= !==  $lt $lte $gt $gte $ne
    2. 与或 $or $in 非 $nin
- U - update
  - Model.updateOne(查询条件, 更新的内容[, 配置对象])
  - Model.updateMany(查询条件, 更新的内容[, 配置对象])
- D - delete
  - Model.deleteOne(查询条件)
  - Model.deleteMany(查询条件)

## 2. 谈谈package.json

- name 包名  下载相关
- version 版本号 1.0.0
  - 第一个版本  新增一些功能
  - 第二个版本  对之前功能进行完善
  - 第三个版本  修复bug
- dependencies 生产依赖：项目运行时需要依赖
- devDependencies 开发依赖：项目构建打包需要使用的依赖（webpack...）
- scripts 脚本 / 指令
  - "build / dist / prod"   npm run build  构建打包生成上线要的文件
  - "start"   npm start  启动运行项目
  - "test"    npm run test

## 22. 请写出git常用指令

- 本地有仓库，远程没有
  - 本地开发了代码，还没添加到git管理（初始化项目仓库）
  - 创建远程仓库
    - github / gitlab
  - 本地git管理
    - git init
    - git add .
    - git commit -m 'xxx'
    - git remote add origin xxx 关联仓库
    - git push origin master/dev 提交
    - git pull origin master/dev 更新
    - git checkout dev 切换dev分支
    - git branch dev 新建dev分支
- 远程有仓库，本地没有
  - 去公司，公司有开发过代码，你接下来参与开发
  - git clone xxx 
  - 问题：
    - 克隆到本地只有master分支，需要再dev开发
    - git fetch origin dev:development 拉取远程仓库dev分支的内容到本地development分支上

## 2、谈谈中间件

- 是什么

  - 本质上是一个函数
  - (req, res, next) => {}

- 作用：

  - 执行任意代码
  - 修改req、res对象
  - 接受请求，返回响应
  - 调用下一个中间件/路由

- 组成

  - req
  - res
  - next 调用下一个中间件/路由

- 应用

  - 应用级中间件
    - 修改req、res对象，过滤非法请求
  - 路由器中间件
    - Router
  - 内置中间件
    - express框架内置的中间件
    - express.static()  向外暴露服务器的静态资源
    - express.urlencoded() 解析请求体数据，将解析后的数据放在req.body上
  - 第三方中间件
    - 社区开发者开发的中间件
    - cookie-parser
  - 错误处理中间件
    - 处理错误的
    - app.use((err, req, res, next) => {})  必须传入四个参数

- 用法

  ```var express = require('express')
  const express = require('express');
  const app = express();
  app.use('/user', function (req, res, next) {
    //TODO
    next();
  });
  app.listen(8080)
  ```

  ​

## 3、谈谈ejs

- 定义
  - ejs是一个javasript模板库，用来从json数据中生成html字符串（ejs是一个高效的模板语言，通过数据和模板，可生成html标记文本）


- 功能
  - 缓存功能，能够缓存好的html模板


- <% code %>用于执行其中javascript代码。
- <%= code %>会对code进行html转义； 
- <%- code %>将不会进行转义；，这一行代码不会执行，像是被注释了一样，然后显示原来的html。也不会影响整个页面的执行。
- 支持自定义标签，比如'<%'可以使用'{{'，'%>'用'}}'代替； 
- 在express中使用
  - 为express服务器，设置模板引擎类型 
    - app.set("view engine","jade/ejs/handlebars/任选其一")
  - 配置ejs模板文件存放路径
    - app.set("view",path);
  - 将ejs模板渲染成html页面后返回给浏览器
    - res.render(path,data)
    - path:模板文件路径 字符串
    - 渲染模板时需要使用的数据，对象
    - res.render("404")
    - res.render("login",{title:"用户登录“})





















