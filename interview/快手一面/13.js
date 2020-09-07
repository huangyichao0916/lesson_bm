let a = {
    a:1,
}
let b = {
    b:1,
}
let c = {
    c:3
}

let foo = function(){
    console.log(this)
}
let fnc = foo.bind(a).bind(b).bind(c)
fnc()