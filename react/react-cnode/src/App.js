import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      tabs:[
        {content:'全部',param:'all'},
        {content:'招聘',param:'job',},
        {content:'精华',param:'godd'},
        {content:'分享',param:'share'},
        {content:'问答',param:'ask'}
      ],
      tab:'all',
      lists:[],    //文章列表
      isLoading:true,
    }
  }
  componentDidMount(){
    this.handleGetPost();
  }
  render(){
    const {lists,tabs,tab,isLoading} = this.state;
    return (
      <div>
        {isLoading && '正在加载中'}
        {lists.length === 0 && '暂无文章'}
        {
          tabs.map((tabObj,key) => {
            return (
              <div key = {key}   data-tab = {tabObj.param}
              className = {tabObj.param === tab ? 'hightlight' : ''}
              onClick = {this.handleTabChange}>
                {tabObj.content}
              </div>
            )
          })
        }
        {//react会自己展开一个数组
          lists.map((list,key) => {
            return (
              <div key = {key}>
                {list.title}
              </div>
            )
          })
        }
      </div>
    )
  }
  handleTabChange = (event) => {
    const tab = event.target.getAttribute('data-tab');
    // this.setState()是一个异步的函数，它有第二个参数
    this.setState({
      tab:tab,
      isLoading:true,
    },() => {
      this.handleGetPost();
    })
    // console.log(this.state.tab);
  }
  handleGetPost = () => {
    const {tab} = this.state;
    axios({
      url:'https://cnodejs.org/api/v1/topics',
      params:{
        tab:tab,
        page:1,
        limit:40,
      }
    })
    .then(res => {
      // console.log(res.data.data);
      this.setState({
        lists : res.data.data,
        isLoading:false
      })
    })
    .catch(err => {
      this.setState({
        isLoading:false
      })
    })
  }
}

export default App;
