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
  return class extends Component {
    state = {
      left: 0,
      top: 0
    }
    handleDown= (e) => {
      var startX = e.clientX;
      var startY = e.clientY;
      let obj = e.target.getBoundingClientRect();
      // 重置起点
      this.startX = startX - obj.x;   // obj.left  // 0
      this.startY = startY - obj.y;   // 0
      document.addEventListener('mousemove', this.handleMove);
      document.addEventListener('mouseup', this.handleUp);
    }
    handleMove = (e) => {
      var newX = e.clientX;
      var newY = e.clientY;
      const diffX = newX - this.startX;
      const diffY = newY - this.startY;
      this.setState({
        left: diffX,
        top: diffY
      })
    }
    handleUp = () => {
      document.removeEventListener('mousemove', this.handleMove);
      document.removeEventListener('mouseup', this.handleUp);
    }
    render() {
      const { left, top} = this.state;
      return (
        <div style={{left, top}} className="dragable"
        onMouseDown={this.handleDown}
        >
          <Com />
        </div>
      )
    }
  }
}

export default App;
