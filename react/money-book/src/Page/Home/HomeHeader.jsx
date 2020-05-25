import React, { Component } from 'react';
import {DatePicker} from 'antd';
import logo from '../../logo.svg';

class HomeHeader extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <img src={logo} alt=""/>
                </div>
                <div className="row">
                    <div className="col col-3 offset-3">
                        <DatePicker picker="month" onChange={this.handleDateChange}/>
                    </div>
                    <div className="col col-6">

                    </div>
                </div>
            </React.Fragment>
        )
    }
    handleDateChange = (date,dateStr) => {

    }
}

export default HomeHeader;