const fileNode = document.getElementById('file');//获取input对象
const img = document.getElementById('preview');//获取img标签对象
const combine = document.getElementById('combine');//获取canvas标签对象
const ctx = combine.getContext('2d');
const flag = document.getElementById('flag');

fileNode.addEventListener('change',function(event){
    // console.log(event)
    let file = event.target.files[0];//获取上传的文件
    console.log(file);
    let fileReader = new FileReader();//new一个文档读取类
    fileReader.readAsDataURL(file);//以base64的格式读取
    fileReader.onload = function(event2){
        // console.log(event2.target.result);
        console.log(1);
        img.src = event2.target.result;//将返回结果赋值给img标签的src属性
        //开始将选取的图片画到canvas上面
        img.onload = function(){
            ctx.drawImage(img,0,0,290,290);
            ctx.drawImage(flag,0,0,290,290);
        }
        
    }
})

document.querySelector('.btn').addEventListener('click',function(){
    fileNode.click();
})