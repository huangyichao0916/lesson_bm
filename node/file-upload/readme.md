 # 文件的上传

 - form表单里面的enctype   
    enctpye会被提交到请求头的Content-Type
    1. text/plain
        纯文本的方式，将前端输入的内容提交给后端
    2. application/x-www-form-urlencoded
        以URL编码的方式，将前端输入的内容提交给后端
    3. multipart/form-data

    前面两种方式对二进制文件或者非ASCII码的字符处理起来很低效
 - 后端处理文件上传
    1. 分隔符分割
    2. 得到分割后的每一块文件内容，然后fs.writeFile()将文件保存下来
    3. 完成