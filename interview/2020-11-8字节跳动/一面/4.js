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
    function helper(node) {
        resArr.push(node.name)
        if (!node.children) {
            return;
        }
        for (const item of node.children) {
            helper(item)
        }
    }
    helper(tree)
    return resArr;
}
console.log(serialize(chapterTree))