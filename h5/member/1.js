var membersEntity = [
    {
        id: 1314,
        name: 'hyc',
        avatar: ''
    },
    {
        id: 520,
        name: 'huang',
        avatar: ''
    },
];
var tbody = document.querySelector('#member tbody');
tbody.innerHTML = membersEntity.map(function (item) {
    return "\n    <tr>\n    <td>" + item.id + "</td>\n    <td>" + item.name + "</td>\n    <td>" + item.avatar + "</td>\n    </tr>\n    ";
}).join('');
