let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let xhr = new XMLHttpRequest();
    let input = document.getElementById('input');
    let list = document.getElementById('songs');
    return function () {
        let value = input.value;
        xhr.open('get', `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${value}`, true);
        xhr.onreadystatechange = function () {
            // console.log(xhr.readyState,xhr.response);
            if (xhr.readyState === 4 && xhr.status === 200) {
                // console.log(JSON.parse(xhr.response));
                let result = JSON.parse(xhr.response);
                list.innerHTML = result.result.songs.map(function (song) {
                    return `
                    <li>
                    演唱者：${song.name} 
                    </li>
                    `
                }).join('');
            }
        }
        xhr.send();
    }
}());

//给回车键加一个同样的方法
window.addEventListener('keydown', function (event){
    if (event.key !== 'Enter') {
        return;
    }
    let xhr = new XMLHttpRequest();
    let input = document.getElementById('input');
    let list = document.getElementById('songs');
    let value = input.value;
        xhr.open('get', `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${value}`, true);
        xhr.onreadystatechange = function () {
            // console.log(xhr.readyState,xhr.response);
            if (xhr.readyState === 4 && xhr.status === 200) {
                // console.log(JSON.parse(xhr.response));
                let result = JSON.parse(xhr.response);
                list.innerHTML = result.result.songs.map(function (song) {
                    return `
                    <li>
                    演唱者：${song.name} 
                    </li>
                    `
                }).join('');
            }
        }
        xhr.send();
})
// window.addEventListener('keydown',function(event){
//     console.log(event.key);
// })

// //使用ajax的步骤，先new一个XMLHttpRequest
// let xhr = new XMLHttpRequest();
// //向网易云的后端要数据   URL：统一资源定位符   
// //get:http规定的一个方法
// //open方法的3个参数：1.方法  2.URL  3.true异步   false同步
// xhr.open('get','http://neteasecloudmusicapi.zhaoboy.com/search?keywords=jay',true);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState,xhr.response);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(JSON.parse(xhr.response));
//     }
// }
// xhr.send();//将请求发送出去
// //
// console.log(xhr.response);