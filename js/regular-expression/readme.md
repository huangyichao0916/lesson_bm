# 正则表达式
 - api
  1. string.match(reg)    return 
  2. reg.test(string)     return boolean
  3. string.replace(reg,str)

 - 正则表达式里面不能识别变量

 - 正则表达式的创建
  1. 字面量创建  let reg = /u/;
  2. 对象创建    let reg2 = new RegExp('z','g');