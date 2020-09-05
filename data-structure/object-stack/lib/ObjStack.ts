interface StackObj{
    [propName:number]:any;
}

export default class ObjStack{
    private items:StackObj;
    private count:number;
    constructor(){
        this.items = {};
        this.count = 0;
    }
    push(item:any):number{
        this.items[this.count] = item;
        this.count ++;
        return this.count;
    }
    pop():any{
        if (this.isEmpty()) {
            return undefined;
        }
        this.count --;
        delete this.items[this.count]
        return this.items[this.count];
    }
    isEmpty():boolean{
        return this.count === 0
    }
    peek():any{
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1]
    }
    clear():void{
        this.items = {};
        this.count = 0;
    }
    size():number{
        return this.count;
    }
    toString():string{
        if (this.isEmpty()) {
            return '';
        }
        let objString:string = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}