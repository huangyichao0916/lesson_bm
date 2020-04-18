var membersEntity = [
    {
        id: '1314',
        name: 'hyc',
        avatar: '',
        phone_number: '18339542812',
        hometown: '南昌'
    },
    {
        id: '520',
        name: 'huang',
        avatar: '',
        phone_number: '18439349412',
        hometown: '北京'
    },
];
// 渲染函数，用于读取membersEntity的内容并渲染出来
var apply = function () {
    var tbody = document.querySelector('#member tbody');
    return function () {
        tbody.innerHTML = membersEntity.map(function (item) {
            return "\n            <tr>\n            <td>" + item.id + "</td>\n            <td>" + item.name + "</td>\n            <td><img src=\"" + item.avatar + "\"></td>\n            <td>" + item.phone_number + "</td>\n            <td>" + item.hometown + "</td>\n            </tr>\n            ";
        }).join('');
    };
}();
apply();
var form = document.getElementsByName('myForm')[0];
// console.log(form);
form.addEventListener('submit', function (event) {
    //阻止默认事件
    event.preventDefault();
    //获取输入框里的值,获取完后就将input框里的内容清空
    var inputID = document.getElementsByName('ID')[0].value;
    document.getElementsByName('ID')[0].value = '';
    var inputName = document.getElementsByName('name')[0].value;
    document.getElementsByName('name')[0].value = '';
    var inputAvatar = document.getElementsByName('avatar')[0].value;
    document.getElementsByName('avatar')[0].value = '';
    var inputPhoneNumber = document.getElementsByName('phone_number')[0].value;
    document.getElementsByName('phone_number')[0].value = '';
    var inputHomeTown = document.getElementsByName('hometown')[0].value;
    document.getElementsByName('hometown')[0].value = '';
    if (inputID && inputName && inputAvatar && inputPhoneNumber && inputHomeTown) {
        var member = {
            id: inputID,
            name: inputName,
            avatar: inputAvatar,
            phone_number: inputPhoneNumber,
            hometown: inputHomeTown
        };
        membersEntity.push(member);
        apply();
    }
    else {
        window.alert('不能输入空值');
    }
});
