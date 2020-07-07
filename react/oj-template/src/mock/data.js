import Mock from 'mockjs';

export default Mock.mock('/posts/','get',{
    success : true,
    title : 'hhhhh',
    message : 'wwwww',
    'list|5-10':[{
        
    }]
})