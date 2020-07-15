import React, { useEffect } from 'react';

function UseRef() {
    // 定义一个 ref
    const h1Ref = React.createRef();

    useEffect(() => {
        // 输出获取到的DOM节点
        console.log('useRef11',h1Ref.current)
    }, [])

    return (
        <div>
            {/*保存 h1 的ref到 h1Ref */}
            <h1 ref={h1Ref}>Hello World!</h1>
        </div>
    )
}

export default UseRef;