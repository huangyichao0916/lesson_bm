import React, { Component } from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      react
    </div>
  );
}

function withDragAble(Com) {
  class WithDragAble extends Component{

    render(){
      return(
        <div>
          <Com />
        </div>
      )
    }
  }
}

export default App;
