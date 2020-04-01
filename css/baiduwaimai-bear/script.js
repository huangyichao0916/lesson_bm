const progress= document.querySelector('.progress-red');
let width=0;
let interval= setInterval(
    function(){
        width=width+10;
        if(width>100){
             clearInterval(interval);
             return;
        }
        progress.style.width=width+'%';
    },
    100
)