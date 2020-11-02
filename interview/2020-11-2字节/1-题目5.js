function A(name) {
    this.name = name;
}
A.prototype.run = function () {
    console.log(`${this.name} run`)
}

function B(name,email) {
    A.call(this,name)
    this.email = email;
}
Object.setPrototypeOf(B.prototype,A.prototype)
B.prototype.swim = function () {
    console.log(`${this.name}${this.email}swim`)
}

const a = new A('黄毅超')
a.run()

const b = new B('小小小', '930@qq');
b.run()
b.swim()