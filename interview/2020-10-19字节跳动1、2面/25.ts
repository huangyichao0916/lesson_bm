interface Subscribers{
    [anyProps:string]:Array<Function>
}
interface SubscriberClass{
    on(eventName:string,fnc:Function):void;
    emit(eventName:string):void;
    off(eventName:string):void;
    once(eventName:string,fnc:Function):void;
}
class Subscriber implements SubscriberClass{
    private subscribers:Subscribers;
    constructor(){
        this.subscribers = {};
    }
    on(eventName:string,fnc:Function):void{
        if (this.subscribers[eventName]) {
            this.subscribers[eventName].push(fnc);
        }else{
            this.subscribers[eventName] = [];
            this.subscribers[eventName].push(fnc)
        }
    }
    emit(eventName:string):void{
        this.subscribers[eventName].forEach(fnc => fnc())
    }
    off(eventName:string):void{
        this.subscribers[eventName] = undefined;
    }
    once(eventName:string,fnc:Function):void{
        let newFnc = () => {
            fnc();
            if (this.subscribers[eventName]) {
                this.subscribers[eventName] = this.subscribers[eventName].filter(i => i !== newFnc)
            }
        }
        if (this.subscribers[eventName]) {
            this.subscribers[eventName].push(newFnc);
        }else{
            this.subscribers[eventName] = [];
            this.subscribers[eventName].push(newFnc)
        }
    }
}

let queue:Subscriber = new Subscriber();
queue.on('f',function(){
    console.log('f')
})
queue.on('y',function(){
    console.log('y')
})
queue.once('z',function(){
    console.log('once f')
})

queue.emit('f')
queue.emit('f')
queue.emit('y')
queue.emit('y')
queue.emit('z')
queue.emit('z')