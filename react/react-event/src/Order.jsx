import React from 'react';

export default class Order extends React.Component {
    child = (e) => {
        console.log(1);
        e.stopPropagation();
    }
    parent = () => {
        console.log(2)
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div onClick={this.parent}>
                <div onClick={this.child}>
                    child
                </div>
            </div>
        )
    }
}