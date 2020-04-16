let allKeys = document.querySelectorAll('.key');

let playSound = function(event){
    // console.log(event.key.toUpperCase());
    const ele = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (ele) {
        ele.play();
    }

    let currentKey = event.key.toUpperCase();
    allKeys.forEach(item => {
        if (item.children[0].innerHTML===currentKey) {
            item.classList.add('playing');
            setTimeout(function(){
                item.classList.remove('playing');
            },1000)
        }
        else{
            item.classList.remove('playing');
        }
    });
}

window.addEventListener('keydown',playSound);


// console.log(typeof allKeys[8].children[0].innerHTML);