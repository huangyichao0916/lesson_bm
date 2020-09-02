export default class Stack{
    private items:Array<any>;
    size:number;
    constructor(){
        this.items = [];
        this.size = 0;
    }
    peek():any{
        if (this.size > 0) {
            return this.items[this.size - 1];
        }else{
            throw new Error('栈为空，无法查看栈顶元素')
        }
    }
    push(item:any):number{
        this.items[this.size] = item;
        this.size ++;
        return this.size;
    }
    pop():any{
        if (this.size = 0) {
            throw new Error('栈为空，无法出栈');
        }else{
            let item:any = this.items.pop();
            this.size --;
            return item;
        }
    }
    isEmpty():boolean{
        return this.size === 0;
    }
    clear():void{
        this.items = [];
    }
    toString():string{
        return this.items.toString();
    }
}