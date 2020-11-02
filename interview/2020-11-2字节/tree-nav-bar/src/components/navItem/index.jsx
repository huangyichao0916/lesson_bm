import React from 'react';
import './navItem.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classnames from 'classnames';

const NavItem = props => {
    const { linkTo, title, level, index, isTriShow } = props;
    const [isShow, setIsShow] = useState(true)
    let cla = classnames({
        'tri': true,
        'rotate': isShow
    })
    let chi = classnames({
        'chi': true,
        'show': !isShow,
    })
    let bor = classnames({
        'border': true,
        'bor-sho': isShow
    })
    let bor2 = classnames({
        'border2': true,
        'bor-sho': isShow
    })

    return (
        <div className="navItem" onClick={e => {
            e.stopPropagation()
            setIsShow(!isShow)
        }}>
            {isTriShow && <div className={bor}></div> }
            {!isTriShow && <div className="rowLine"></div>}
            <div className="content">
                {isTriShow && <div className={cla}></div>}
                {!(level===0 && index===1) && level + '-' + index}
                <Link to={linkTo}>{title}</Link>
            </div>
            <div className={chi}>
                {props.children}
            </div>
        </div>
    )
}

export default NavItem;