import React from 'react';
import propTypes from 'prop-types';//要小写
import './Header.css';

function Header(props){
    const {title,onBack} = props;
    return (
        <div className="header">
            <div className="header-back" onClick={onBack}>
                <svg width="42" height="42">
                    <polyline 
                    points="25,13,16,21,25,29"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    />
                </svg>
            </div>
            <div className="header-back2">{title}</div>
        </div>
    );
}

Header.propTypes = {
    title:propTypes.string.isRequired,
    onBack:propTypes.func.isRequired,
}
 
export default Header;