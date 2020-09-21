import React from 'react';
let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve('res');
    }, 2000);
})
.then(r => {
    status = 'success';
    res = r;
})
let status = 'pending';
let res;
function req() {
    console.log(1)
    // p.then((r) => {
    //     status = 'success';
    //     res = r;
    // })
    if (status === 'pending') {
        console.log(2)
        throw p;      // catch
    } else if (status === 'success') {
        console.log(3)
        return res;
    }
}
export default function Demo() {
    console.log('进入组件function')
    const res = req();
    console.log('继续')
    return (
        <h2>
            { res}
        </h2>
    )
}