# 题目1
function FileComponent() {
    // todo
  }
  
  FileComponent('index.js', (file) => {
    console.log(file)
    // 3s 之后 输出 “读取完毕”
  })



# 题目2
 - 实现 Array.prototype.Foreach()
 ```js
    Array.prototype.myForeach = function(fnc) {
        for (let i = 0; i < this.length; i++) {
            fnc(this[i],i)
        }
    }
 ```