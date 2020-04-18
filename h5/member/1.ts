interface MemberEntity {
    id: string;
    name: string;
    avatar: string;
    phone_number: string;
    hometown: string;
}

const membersEntity: MemberEntity[] = [
    {
        id: '1314',
        name: 'hyc',
        avatar: '',
        phone_number: '18339542812',
        hometown: '南昌',
    },
    {
        id: '520',
        name : 'huang',
        avatar: '',
        phone_number: '18439349412',
        hometown: '北京',
    },

]

// 渲染函数，用于读取membersEntity的内容并渲染出来
let apply = function(){
    const tbody = document.querySelector('#member tbody');
    return function(){
        tbody.innerHTML = membersEntity.map((item) => {
            return `
            <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src="${item.avatar}"></td>
            <td>${item.phone_number}</td>
            <td>${item.hometown}</td>
            </tr>
            `
        }).join('');
    }
}();
apply();
const form = document.getElementsByName('myForm')[0];
// console.log(form);
form.addEventListener('submit',(event) => {
    //阻止默认事件
    event.preventDefault();

    //获取输入框里的值,获取完后就将input框里的内容清空
    const inputID = (document.getElementsByName('ID')[0] as HTMLInputElement).value;
    (document.getElementsByName('ID')[0] as HTMLInputElement).value='';
    const inputName = (document.getElementsByName('name')[0] as HTMLInputElement).value;
    (document.getElementsByName('name')[0] as HTMLInputElement).value='';
    const inputAvatar = (document.getElementsByName('avatar')[0] as HTMLInputElement).value;
    (document.getElementsByName('avatar')[0] as HTMLInputElement).value='';
    const inputPhoneNumber = (document.getElementsByName('phone_number')[0] as HTMLInputElement).value;
    (document.getElementsByName('phone_number')[0] as HTMLInputElement).value='';
    const inputHomeTown = (document.getElementsByName('hometown')[0] as HTMLInputElement).value;
    (document.getElementsByName('hometown')[0] as HTMLInputElement).value='';
    

    if (inputID&&inputName&&inputAvatar&&inputPhoneNumber&&inputHomeTown) {
        let member:MemberEntity = {
            id: inputID,
            name: inputName,
            avatar: inputAvatar,
            phone_number: inputPhoneNumber,
            hometown: inputHomeTown,
        }
        membersEntity.push(member);
        apply();
    }
    else{
        window.alert('不能输入空值');
    }
})