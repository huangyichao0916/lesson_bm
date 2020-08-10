type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' |
    'msRequestFullscreen';
interface HTMLElement {
    requestFullscreen(): any,
    webkitRequestFullScreen(): any,
    mozRequestFullScreen(): any,
    msRequestFullscreen(): any
}
let RFS_METHOD: RFSmethods;
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullscreen' in document.body) {
    RFS_METHOD = 'msRequestFullscreen';
}

function beFull(el: HTMLElement) {
    el[RFS_METHOD]();
}
let box = document.querySelector('.box');
let btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', function () {
        if (box instanceof HTMLElement) {
            beFull(box);
        }
    })
}