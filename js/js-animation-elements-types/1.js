const highlight = document.createElement('div');
highlight.classList.add('bgc');
document.body.appendChild(highlight);

const allLinks = document.querySelectorAll('a');
allLinks.forEach(function(aNode){
    aNode.addEventListener('mouseenter',function(event){
        const size = aNode.getBoundingClientRect();
        //让highlight盒子的宽高与a标签的宽高相同
        highlight.style.width = size.width + 'px';
        highlight.style.height = size.height + 'px';

        highlight.style.transform = `translateX(${size.left}px) translateY(${size.top}px)`;
    })
})