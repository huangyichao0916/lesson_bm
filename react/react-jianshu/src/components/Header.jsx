import React, { Component } from 'react';
import ImmutableComponent from './common';
import { is } from 'immutable';
class Header extends ImmutableComponent {
  state = {  }
  // shallowEqual(objA, objB) {
  //   if (typeof objA !== 'object' ||
  //   typeof objB !== 'object') {
  //     return false;
  //   }
  //   const keysA = Object.keys(objA);
  //   const keysB = Object.keys(objB);
  //   if (keysA.length !== keysB.length) return false;
  //   for (let key of keysA) {
  //     if (objA[key] !== objB[key]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  render() { 
    console.log('header render');
    const { title } = this.props;
    return (
      <div>
        header： { title }
      </div>
    );
  }
}
 
export default Header;