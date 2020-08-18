import React from 'react';

export default function(props){
    const {path,component} = props;
    return(
        window.location.pathname = path ? <component /> :null
    )
}