async function asd(){
    let a = await 3;
    console.log(a)
    return 'sad'
}
asd().then(res => console.log(res))
console.log(10)