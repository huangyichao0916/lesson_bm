
//将数据从本地取出来
let localData = localStorage.getItem('toDo') || [];
//取出来的时候是字符串，用JSON.parse将字符串解析出来
localData = JSON.parse(localData);
let toDo = localData;
render();

const ul = document.querySelector('ul');
const submit = document.querySelector('.submit');

function addItem(event){
    event.preventDefault();
    const input = document.querySelector('[type="text"]').value;
    // console.log(input);
    let obj = {
        text:input,
        done:false,
    }
    toDo.push(obj);

    //将函数存储在本地，第一个参数为名字，第二个参数必须是字符串
    localStorage.setItem('toDo',JSON.stringify(toDo)); //JSON.stringify(toDo)将toDo转化成字符串；


    render();
}
function render(){
    ul.innerHTML=toDo.map((item,i)=>{
        return `
        <li>
            <input type="checkbox" id="todo${i}">
            <label for="todo${i}">${item.text}</label>
        </li>
        `
    }).join('');
}

//给表单添加一个提交事件
submit.addEventListener('submit',addItem);