import React  from 'react';
import ImmutableComponent from './components/common';
import Header from './components/Header'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import {Provider} from 'react-redux'


class App extends ImmutableComponent{
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;

