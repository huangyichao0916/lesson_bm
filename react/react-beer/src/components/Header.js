import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <h1>
                <Link to="/">{this.props.siteName}</Link>
            </h1>
        )
    }
}

export default Header;