import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , combineReducers} from 'redux';
import {get} from 'axios';

const counterReducer = function(state = {count:1} , action) {
  switch (action.type) {
    case 'COUNT_ADD':
      return{
        ...state,
        count : state.count + 1,
      }
      break;
    case 'COUNT_REDUCE':
      return{
        ...state,
        count : state.count - 1,
      }
      break;
    default:
      return state;
  }
}
const postReducer = function (state = {list:[{title:'hello'}]} , action) {
  switch (action.type) {
    case 'LOAD_POSTs':
      return{
        ...state,
        list:action.payload,
      }
      break;
  
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  counter : counterReducer,
  post : postReducer,
})

const store = createStore(rootReducers);
store.dispatch({
  type : 'COUNT_ADD',
  payload : {}
})
store.dispatch({
  type : 'COUNT_REDUCE',
  payload : {}
})

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
