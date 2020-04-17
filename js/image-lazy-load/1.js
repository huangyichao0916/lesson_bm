function lazyLoad(){
    const allImages = document.querySelectorAll('img[lazyload]');
    // console.log(allImages);
    let windowHeight = window.innerHeight;
    for (const img of allImages) {
        let size = img.getBoundingClientRect();
        console.log(size.right-size.left===size.width)
        if (size.top < windowHeight && size.bottom > 0) {
            // 出现在视窗范围之内
            //开始加载图片
            let originalSrc = img.getAttribute('data-original');
            // const imgObj = new Image();
            // imgObj.src = originalSrc;

            // //什么时候加载完
            // imgObj.onload = function(){

            // }
            img.src = originalSrc;
            img.removeAttribute('lazyload');
        }
    }
}
window.addEventListener('scroll',lazyLoad);