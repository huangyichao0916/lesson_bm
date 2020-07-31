function serialize(tree) {
    let res = [];
    let helper = node => {
        if (node) {
            res.push(node.name);
            if (node.children) {
                for (const item of node.children) {
                    helper(item);
                }
            }
        }else{
            return;
        }
    }
    helper(tree);
    return res;
}

const chapterTree = {
    name: '总章节',
    children: 
    [
        {
            name: '章节一', 
            children:
                [
                    {
                        name: '第一节', children:
                            [
                                {
                                    name: '第一小节'
                                },
                                {
                                    name: '第二小节'
                                }
                            ]
                    },
                    {
                        name: '第二节'
                    }
                ]
        },
        {
            name: '章节二',
            children:
                [
                    {
                        name: '第三节'
                    },
                    {
                        name: '第四节'
                    }
                ]
        }
    ]
};

const result = serialize(chapterTree);
console.log(result);