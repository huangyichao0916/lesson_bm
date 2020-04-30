import React from 'react';//引入react，这是每个文件都必须的一步，它们都要以来react
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';

ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
);