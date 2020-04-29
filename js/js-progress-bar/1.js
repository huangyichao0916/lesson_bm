
class Progress {
    constructor(selector) {
        this.wrapper = document.querySelector(selector);//选中盒子
        this.progressButton = this.wrapper.querySelector('.progress-button');//获取进度条按钮
        this.progress = this.wrapper.querySelector('.progress');
        this.initEvent();
    }
    initEvent() {
        let downX = 0;
        let btnLeft = 0;//按钮本身的位置
        let wrapperLength = this.wrapper.offsetWidth;
        let progressButtonLength = this.progressButton.offsetWidth;
        this.progressButton.addEventListener('touchstart', (event) => {
            // console.log(event);
            let touch = event.touches[0];
            btnLeft = parseInt(this.progressButton.style.left || 0);//获取了progressButton距离左边的距离
            downX = touch.clientX;
        })
        this.progressButton.addEventListener('touchmove', (event) => {
            let touch = event.touches[0];
            let diffX = touch.clientX - downX;//获取在滑动过程中产生的位移
            let left = diffX + btnLeft;//滑动的过程中，按钮的位置等于本来的位置加上活动过程产生的位移
            //将进度按钮的拖动范围限制在盒子里面
            if (left < 0) {
                left = 0;
            }
            if (left > wrapperLength) {
                left = wrapperLength;
            }
            let percentage = left / wrapperLength * 100;
            this.progress.style.width = `${percentage}%`;
            this.progressButton.style.left = `${left}px`;//重新设置progressButton的位置

        })
    }
}
let myProgress = new Progress('.progress-bar');