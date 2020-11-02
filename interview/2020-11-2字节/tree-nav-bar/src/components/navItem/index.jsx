import React from 'react';
import './navItem.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const NavItem = props => {
    const {linkTo,title} = props;
    const [isShow, setIsShow] = useState(true)
    // console.log(isShow)
    // let items = [];
    // if (info.items) {
    //     items = info.items;
    // }
    // console.log(0,items)
    // items = items.map((item,index) => {
    //     return(
    //         <NavItem info={item} key={index}/>
    //     )
    // })
    // console.log(1,items)
    return (
        <div className="navItem" onClick={e => {
            e.stopPropagation()
            setIsShow(!isShow)
        }}>
            <Link to={linkTo}>{title}</Link>
            {/* {isShow && items} */}
            {isShow && props.children}
        </div>
    )
}

export default NavItem;