const chapterTree = {
    name: '总章节',
    children: [
        {
            name: '章节一',
            children: [
                {
                    name: '第一节',
                    children: [
                        { name: '第一小节' },
                        { name: '第二小节' }
                    ]
                },
                { name: '第二节' }
            ]
        },
        {
            name: '章节二',
            children: [
                { name: '第三节' },
                { name: '第四节' }
            ]
        }
    ]
};

function serialize(tree) {
    const resArr = [];

    function helper(node,path) {
        if (!path.length) {
            resArr.push(node.name)
        }else{
            resArr.push('('+path.join('.')+')'+node.name)
        }
        if (!node.children) {
            return;
        }
        let i = 0;
        for (const item of node.children) {
            i ++;
            path.push(i)
            helper(item,path)
            path.pop()
        }
    }
    helper(tree,[])
    return resArr;
}
console.log(serialize(chapterTree))