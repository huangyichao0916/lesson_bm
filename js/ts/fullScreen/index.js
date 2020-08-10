"use strict";
var RFS_METHOD;
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
function beFull(el) {
    el[RFS_METHOD]();
}
var box = document.querySelector('.box');
var btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', function () {
        if (box instanceof HTMLElement) {
            beFull(box);
        }
    });
}
