const target = document.querySelector('.target');
let observer = new IntersectionObserver(function(nodes){
    nodes.forEach(function(node){
        if (node.isIntersecting) {
            console.log('出现了');
        }
        if (node.isIntersecting==false) {
            console.log('没出现')
        }
    });
});

//开始观察，如果出现在视窗范围之内，就会通知我
//用回调的方式通知我
observer.observe(target);

