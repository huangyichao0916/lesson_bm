interface Subscribes{
    [anyProps:string]:Array<Function>
}

function pubSub() {
    const subscribers:Subscribes = {};

    function subscribe(eventName:string,callback:Function) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback)
        const index = subscribers[eventName].length - 1;

        return function(){
            subscribers[eventName].splice(index,1)
        }
    }

    function publish(eventName:string,data) {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        }
        subscribers[eventName].forEach(fnc => fnc(data))
    }

    return {
        subscribe,
        publish,
    }
}

const myP = pubSub();
const unSubscriber = myP.subscribe('click',function(e){
    console.log(e)
})
myP.publish('click','权佳欣')
unSubscriber();
myP.publish('click','权佳欣')