 # 文件的上传

 - form表单里面的enctype   
    enctpye会被提交到请求头的Content-Type
    1. text/plain
        纯文本的方式，将前端输入的内容提交给后端
    2. application/x-www-form-urlencoded
        以URL编码的方式，将前端输入的内容提交给后端
    3. multipart/form-data
        为这种方式时，content-type后面会多一个boundary，然后在payload里面，会将form里面的每一项输入用boundary隔开

    前面两种方式对二进制文件或者非ASCII码的字符处理起来很低效
 - 后端处理文件上传
    1. 分隔符分割
    2. 得到分割后的每一块文件内容，然后fs.writeFile()将文件保存下来
    3. 完成

 # multipart/form-data 流程总结
    - 前端
        1. 在form表单中点击提交
        2. 在请求头的content-type中会产生一个boundary
        3. 在payload中，每个输入都会被boundary隔开
    - 后端
        1. 获取content-type中的boundary
        2. 用split(boundary)获取payload中的每一项
        3. 再将每一项用换行符分割开来，获取文件的内容
        4. 写入目标文件