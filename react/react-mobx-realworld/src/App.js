import React from 'react';
import './App.css';
import './util/request.js';
import {Provider} from 'mobx-react';
import articleStore from './store/articleStore';//需要注意的是在这里引入的整个类
import Home from './pages/home';

const store = {
  articleStore,
}

function App() {
  return (
    <Provider {...store}>
      <Home />
    </Provider>
  );
}

export default App;
