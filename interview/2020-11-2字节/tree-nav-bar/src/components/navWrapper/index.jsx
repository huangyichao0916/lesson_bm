import React from 'react';
import './navWrapper.css';
import NavItem from '../navItem';
// import NavItem2 from '../navItem2';

const NavWrapper = props => {
    const { obj } = props;
    // console.log(obj)
    let i = 0;
    let level = 0;
    function li() {
        level++;
    }
    function lr() {
        level--;
    }
    function createTreeNav(node, iIndex) {
        const { linkTo, title, items } = node;
        i++;
        if (!items) {
            return (
                <NavItem linkTo={linkTo} title={title} key={i} level={level} index={iIndex}>

                </NavItem>
            )
        }
        return (
            <NavItem linkTo={linkTo} title={title} key={i} level={level} index={iIndex} isTriShow>
                {li()}
                {
                    items.map((item, index) => createTreeNav(item, index + 1))
                }
                {lr()}
            </NavItem>
        )
    }
    return (
        <div className="navWrapper">
            {createTreeNav(obj, 1)}
        </div>
    )
}

export default NavWrapper;