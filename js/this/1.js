// let a = 5;

// // function foo(b){
// //     // console.log(this);
// //     let a=4;
// //     console.log(this.a,b);
// // }
// let obj = {
//     a:{'shdas':5,
//         'sdj':10
//     },
//     foo:function(){
//         console.log(this.a);
//     }
// }
// let foo = function(){
//     console.log(this);
// }
// let onClick = function(){
//     let that = this;
//     foo.call(that);
// }
// // foo.call(Window);
// let btn = document.getElementById('wo');
// btn.addEventListener('click',function(){
//     foo.call(obj);
// });
// // let x = obj.a;
// // x.sdj = 6;
// // console.log(obj.a.sdj)
// // console.log(x.sdj);
let obj1 = {
    a:'obj1',
    say:function(){
        console.log(this.a);
    }
}
let obj2 = {
    a:'obj2',
    t:obj1.say,
    say1:function(){
        console.log(this);
        obj1.say();
    }
}
obj2.t();