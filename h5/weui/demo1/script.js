//搜索相关的功能
const searchBar = document.getElementById("searchBar");
const searchText = document.getElementById("searchText");
const searchInput = document.getElementById("searchInput");
const searchCancel = document.getElementById("searchCancel");

searchText.addEventListener('click',function (){
    searchBar.classList.add('weui-search-bar_focusing');
    searchInput.focus();
});

searchCancel.addEventListener('click',function(){
    searchBar.classList.remove('weui-search-bar_focusing');
});


const choose = document.querySelectorAll(".weui-tabbar__item");
const tabs = document.querySelectorAll(".weui-tab__panel");
for (let i = 0; i < choose.length; i++) {
    choose[i].addEventListener('click',function(){
        showTab.call(this);
    });
}
function showTab(){
    for (let j = 0; j < tabs.length; j++) {
        if (choose[j]===this) {
            choose[j].classList.add("weui-bar__item_on");
            tabs[j].classList.add("show");
        }
        else{
            choose[j].classList.remove("weui-bar__item_on");
            tabs[j].classList.remove("show");
        }
    }
}
