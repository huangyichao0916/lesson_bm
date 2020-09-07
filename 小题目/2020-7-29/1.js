class Queue{
    constructor(){
        this.tasks = [];
    }
    task(wait,callback){
        this.tasks.push({
            wait,
            callback,
        })
        return this;
    }
    start() {
        let startTime = 0;
        for (const task of this.tasks) {
            startTime += task.wait;
            setTimeout(() => {
                task.callback();
            }, startTime);
        }
    }
}


new Queue()
    .task(1000, () => {
        console.log(1)
    }).task(2000, () => {
        console.log(2)
    }).task(1000, () => {
        console.log(3)
    }).start()