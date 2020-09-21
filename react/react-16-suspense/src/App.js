import React, { Suspense } from 'react';
import './App.css';
import ReqDemo from './ReqDemo'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>加载中...</h2>}>
        <ReqDemo />
      </Suspense>
    </div>
  );
}

export default App;
