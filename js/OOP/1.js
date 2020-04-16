function dragAble(selector){
    let ele = document.querySelector(selector);
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let dragEleSize = ele.getBoundingClientRect();
    function onMouseMove(event) {
        // console.log(event);
        let moveX = event.clientX,
            moveY = event.clientY;
        let distanceX = windowWidth - dragEleSize.width;
        moveX = moveX <= distanceX ? moveX : distanceX;
        let distanceY = windowHeight - dragEleSize.height;
        moveY = moveY <= distanceY ? moveY : distanceY;
        ele.style.transform = `
        translate3d(${moveX}px,${moveY}px,0)
        `
    }
    ele.addEventListener('mousedown', function (event) {
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', onMouseMove);
        })
    })
}
dragAble('#btn');
dragAble('#drag1');