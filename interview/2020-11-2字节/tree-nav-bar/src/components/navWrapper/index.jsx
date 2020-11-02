import React from 'react';
import './navWrapper.css';
import NavItem from '../navItem';
// import NavItem2 from '../navItem2';

const NavWrapper = props => {
    const {obj} = props;
    // console.log(obj)
    let i = 0;
    function createTreeNav(node) {
        const {linkTo, title, items} = node;
        i ++;
        return (
            <NavItem linkTo={linkTo} title={title} key={i}>
                {
                    items && items.map(item => createTreeNav(item))
                }
            </NavItem>
        )
    }
    return (
        <div className="navWrapper">
            {createTreeNav(obj)}
        </div>
    )
}

export default NavWrapper;