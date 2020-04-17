interface MemberEntity{
    id:number;
    name:string;
    avatar:string;
}

const membersEntity:MemberEntity[] = [
    {
        id : 1314,
        name : 'hyc',
        avatar : ''
    },
    {
        id : 520,
        name : 'huang',
        avatar:''
    },

]
const tbody = document.querySelector('#member tbody');
tbody.innerHTML = membersEntity.map((item)=>{
    return `
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.avatar}</td>
    </tr>
    `
}).join('');