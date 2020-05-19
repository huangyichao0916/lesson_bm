import React, { Component } from 'react';
import Header from './Header';

class About extends Component{
    render(){
        return(
            <div>
                <Header siteName="Beer me!"/>
                关于我们
            </div>
        )
    }
}

export default About;