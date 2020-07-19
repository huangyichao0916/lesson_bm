# 正则表达式
 - api
  1. string.match(reg)    return array  数组里面保留了第一次匹配到的字符串，加了g后就是一个保留着所有的匹配到的字符串的数组
  2. reg.test(string)     return boolean
  3. string.replace(reg,str)

 - 正则表达式里面不能识别变量

 - 正则表达式的创建
  1. 字面量创建  let reg = /u/;
  2. 对象创建    let reg2 = new RegExp('z','g');