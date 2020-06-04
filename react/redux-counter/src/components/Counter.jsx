import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(){
        super();
        this.a = 0;
    }
    PropTypes = {
        value : PropTypes.number.isRequired,
        onIncrement : PropTypes.func.isRequired,
        onDecrement : PropTypes.func.isRequired,
    }
    componentDidMount(){
        console.log(`-----componentDidMount了${this.a}次`);
    }
    componentDidUpdate(){
        console.log(`-----componentDidUpdate了${this.a}次`);
    }
    componentWillMount(){
        console.log(`-----componentWillMount了${this.a}次`);
    }
    componentWillUpdate(){
        console.log(`-----componentWillUpdate了${this.a}次`);
    }
    render(){
        this.a ++ ;
        const {value , onIncrement , onDecrement} = this.props;
        return(
            <div className="click">
                Click<span>{value}</span>times

                <div>
                    <button onClick={onIncrement}>increase</button>
                    <button onClick={onDecrement}>decrease</button>
                </div>
            </div>
        )
    }
}

export default Counter;