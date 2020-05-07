const ul = document.querySelector('ul');
// function fnc() {
//     setTimeout(() => {
//         ul.className = 'stop';
//         setTimeout(() => {
//             ul.className = 'warn';
//             setTimeout(() => {
//                 ul.className = 'pass';
//                 fnc();
//             }, 500);
//         }, 500);
//     }, 500);
// }
// fnc();
// let p = function () {
//     return new Promise(function (resolve, reject) {
//         // ul.className = 'stop';
//         setTimeout(() => {
//             // ul.className = 'warn';
//             resolve();
//         }, 1000);
//     });
// }
// p().then(function () {
//     ul.className = 'stop';
//     return p();
// })
//     .then(function () {
//         ul.className = 'warn';
//         return p();
//     })
//     .then(function () {
//         ul.className = 'pass';
//     })
setInterval(() => {
    let p = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }
    p().then(function () {
        ul.className = 'stop';
        return p();
    })
    .then(function () {
        ul.className = 'warn';
        return p();
    })
    .then(function () {
        ul.className = 'pass';
    })
}, 3000);