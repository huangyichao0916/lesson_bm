import React from 'react';
import './App.css';

function App() {
  fetch('http://localhost:1314/rest/cities')
    .then(data => data.json)
    .then(data => {
      console.log(data);
    })
  return (
    <div className="App">
      123
    </div>
  );
}

export default App;
