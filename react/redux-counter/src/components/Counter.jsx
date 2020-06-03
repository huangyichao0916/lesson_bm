import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
    PropTypes = {
        value : PropTypes.number.isRequired,
        onIncrement : PropTypes.func.isRequired,
        onDecrement : PropTypes.func.isRequired,
    }

    render(){
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