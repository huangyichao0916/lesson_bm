//设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", "3"
new Queue()
    .task(1000, () => {
        console.log(1)
    }).task(2000, () => {
        console.log(2)
    }).task(1000, () => {
        console.log(3)
    }).start()
class Queue {
 
}