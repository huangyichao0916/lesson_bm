import React, { Component } from 'react';

class Test extends Component {
    state = {
        content:'123',
        xxx:'asd',
    }
    componentDidMount(){
        console.log('已经挂载');
    }
    componentDidUpdate(){
        console.log('已经更新');
    }
    handleClick = () => {
        this.setState({
            content:123,
        })
    }
    render() {
        return (
            <div className="test" onClick={this.handleClick}>
                {this.state.content}
                {this.state.xxx}
            </div>
        );
    }
}
 
export default Test;