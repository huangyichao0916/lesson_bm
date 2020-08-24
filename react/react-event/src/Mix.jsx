import React from 'react';

class Mix extends React.Component{
    state={
        visible: false,
    }
    handleToggle = e => {
        this.setState({
            visible: true,
        })
        e.stopPropagation();
    }
    componentDidMount(){
        document.documentElement.addEventListener('click',() => {
            this.setState({
                visible: false,
            })
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleToggle}>toggle</button>
                <div style={{display:this.state.visible?'block':'none'}}>
                    内容
                </div>
            </div>
        )
    }
}

export default Mix;