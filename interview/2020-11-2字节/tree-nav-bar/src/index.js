import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const obj = {
  title: '视图',
  linkTo: 'www.baidu.com',
  items: [
    {
      title: 'asflkjasklf',
      linkTo: 'www.baidu.com',
      items: [
        {
          title: 'afijkc',
          linkTo: 'www.baidu.com',
          items: [
            {
              title: 'asfknlasd',
              linkTo: 'wwiasd',
            },
            {
              title: 'asjk',
              linkTo: 'wwiasd',
            },
            {
              title: 'askdlj',
              linkTo: 'wwiasd',
            },
          ]
        },
        {
          title: 'asdkm',
          linkTo: 'www.baidu.com',
        }
      ]
    },
    {
      title: 'asdj',
      linkTo: 'asdljkk',
      items: [
        {
          title: 'asfknlasd',
          linkTo: 'wwiasd',
        },
        {
          title: 'asjk',
          linkTo: 'wwiasd',
        },
        {
          title: 'askdlj',
          linkTo: 'wwiasd',
        },
      ]
    }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App obj={obj} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
