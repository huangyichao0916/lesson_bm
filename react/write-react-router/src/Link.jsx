import React from 'react';

export default function Link(props){
    const {to} = props;
    const handleClick = () => {
        window.history.pushState(null,null,to);
    }
    return(
        <div onClick={handleClick}>
            {props.children}
        </div>
    )
}