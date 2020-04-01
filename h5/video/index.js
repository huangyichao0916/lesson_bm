const speed = document.querySelector(".speed");
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e){
    // console.log('123');
    const y = e.pageY - this.offsetTop;//offsetTop获得该对象距离浏览器视窗顶部的距离
    const percent = y/this.offsetHeight;//offsetHeight获得该对象自身的高度
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent*100)+'%';
    const playbackRate = percent * (max - min)+min;
    bar.style.height=height;
    bar.textContent=playbackRate.toFixed(1)+"x";
    video.playbackRate=playbackRate;
}
speed.addEventListener('mousemove',handleMove);

