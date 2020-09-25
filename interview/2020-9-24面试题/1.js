
function fnc1() {
    console.log(this)
    function fnc2() {
        console.log(this)
    }

    fnc2()
}

let obj = {
    a:1
}

fnc1.call(obj)