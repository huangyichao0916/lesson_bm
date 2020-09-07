function inherit(parentCon, extension) {

    function fnc(name) {
        parentCon.call(this,name);
    }
    fnc.prototype.__proto__ = parentCon.prototype;
    for (const key in extension) {
        fnc.prototype[key] = extension[key];
    }

    return fnc;
}

let animalNum = 0;
function Animal(name) {
    animalNum++;
    this.name = name;
}
Animal.prototype.getName = function () {
    return this.name;
};
const Cat = inherit(Animal, {
    say: function () {
        console.log(`NO${animalNum}:${this.getName()}`);
    }
});
const cat1 = new Cat('小花');
cat1.say(); // NO1:小花