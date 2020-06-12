import React, { Component } from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common';
import Header from './components/Header'
import './App.css';


class App extends ImmutableComponent{
  state = {
    title: fromJS('123'),
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {title:fromJS('123'),}
      )
    }, 1500)
  }
  render() {
    console.log('app render');
    return (
      <div>
        123456
        <Header title={this.state.title}/>
      </div>
    )
  }
}


export default App;

