import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from './Notification';
import App2 from './App2';
import notification from './Notification';

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        notification.open({
          title : 'this is the title',
          content : 'this is the content',
        })
      }}>open</button>

      <button onClick={
        () => {
          notification.close()
        }
      }>close</button>
    </div>
  );
}

export default App;
