# 1
```js
    //写出这段代码的输出结果：

    function createTask(ms) {
        return () => {
            console.log('start', ms);
            return new Promise(r => setTimeout(() => {
                console.log('end', ms);
                r(ms);
            }, ms));
        }
    }
    const tasks = Array(5).fill(null).map((_, i) => createTask(i * 1000));
    Promise.all(tasks.map(task => task())).then(console.log);
```
- 进阶：对promise进行限流，每次只能有2个promise在执行
- 手写Promise.All()

# 2
手写 Promise.Race()

# 3 限流
对promise的个数进行限流，每次只能有2个promise在执行
