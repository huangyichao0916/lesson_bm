import React from 'react';

export default function(props){
    // console.log(props);
    let {from , to , exchangeFromTo} = props;
    return(
        <div className="journey">
            <div className="journey-station">
                <input type="text" className="journey-input" value={from} readOnly/>
            </div>
            <div className="journey-switch" onClick={() => exchangeFromTo()}>
                {/* <img src="" alt="" /> */}
                交换
            </div>
            <div className="journey-station">
                <input type="text" className="journey-input" value={to} readOnly/>
            </div>
        </div>
    )
}