import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import {Link} from 'react-router-dom'

class Main extends Component{
    componentDidMount(){
        console.log(this.props);
        console.log("----------------")
        console.log(this.props.match);
    }
    render(){
        return(
            <div className="wrapper">
                <Header siteName="Beer me!"/>
                <Search />
            </div>
        )
    }
}

export default Main;