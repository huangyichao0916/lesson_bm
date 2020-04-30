window.onload = function () {
    const tabLinks = document.querySelectorAll('.tabbar a');
    const swiper_wrapper = document.querySelector('.swiper-wrapper');
    tabLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
        }, false)
    })
    // let myBanners;
    fetch('http://127.0.0.1:3000/banner')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let myBanners = data.banners;
            console.log(myBanners);
            let str = ''
            myBanners.forEach(function (item) {
                str += `<div class="swiper-slide">
                            <img class="focus-item-img" src="${item.imageUrl}">
                        </div>`
            })
            swiper_wrapper.innerHTML = str;

            // myBanners.forEach(function (item) {
            //     // console.log(item.imageUrl);
            //     let oDiv = document.createElement('div');
            //     oDiv.classList.add('swiper-slide');
            //     oDiv.innerHTML = `<img class="focus-item-img" src="${item.imageUrl}">`;
            //     // console.log(oDiv);
            //     swiper_wrapper.appendChild(oDiv);
            // })
        })
}
new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})

