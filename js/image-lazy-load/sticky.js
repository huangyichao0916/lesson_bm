let nav = document.getElementById('main');
let navTop = nav.offsetTop;
function isSticky(){
    // console.log(nav.offsetTop);
    if (window.scrollY>=navTop) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
    }
    else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = `${0}px`;
    }
}
window.addEventListener('scroll',isSticky);