import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

const obj = {
  title: '视图',
  linkTo: 'www.baidu.com',
  items:[
      {
          title: '1',
          linkTo: 'www.baidu.com',
          items: [
              {
                  title: '1-1',
                  linkTo: 'www.baidu.com',
                  items: [
                    {
                      title:'1-1-1',
                      linkTo: 'wwiasd',
                    },
                    {
                      title:'1-1-2',
                      linkTo: 'wwiasd',
                    },
                    {
                      title:'1-1-3',
                      linkTo: 'wwiasd',
                    },
                  ]
              },
              {
                title: '1-2',
                linkTo: 'www.baidu.com',
              }
          ]
      }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App obj={obj}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
