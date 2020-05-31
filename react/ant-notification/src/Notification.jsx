import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Notification extends Component{
    state = {
        visible : true,
        title : null,
        content : null,
    }
    open = ({title , content}) => {
        this.setState({
            visible:true,
            title : title,
            content : content,
        })
    }
    close = () => {
        this.setState({
            visible:false,
        })
    }
    render(){
        const {visible , title ,content} = this.state;
        // const {children} = this.props;
        return(
            <div className={visible === true ? 'show' : 'hidden'}>
                {title}
                {content}
            </div>
        )
    }
}

function createNotification(){
    const div = document.createElement('div');
    const ref = React.createRef();
    ReactDOM.render(<Notification ref={ref} /> , div);
    //将div挂载在body上，让这个弹窗和root平级
    document.body.appendChild(div);

    return {
        open : ref.current.open,
        close : ref.current.close,
        //ref.current = new Notification ()
        //ref并没有将实例直接放在ref本身上，而是放在了current属性上面
    }
}

let notification = null;
if (!notification) {
    const {open , close} = createNotification();
    notification = {
        open,
        close,
    };
}

export default notification;