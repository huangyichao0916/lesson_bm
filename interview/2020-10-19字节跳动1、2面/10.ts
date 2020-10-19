class Queue{
    private queue : Function [];
    constructor(){
        this.queue = [];
    }
    task(delay:number,fnc:(...args:any[])=>void){
        const newFnc:Function = () => {
            setTimeout(() => {
                fnc();
            }, delay);
        }
        this.queue.push(newFnc)

        return this;
    }
    start():void{
        this.queue.forEach(item => item())
    }
}

new Queue().task(1000,()=>console.log(1)).task(2000,()=>console.log(2)).task(3000,()=>console.log(3)).start()