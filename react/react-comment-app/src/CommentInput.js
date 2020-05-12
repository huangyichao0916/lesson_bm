import React, { Component } from 'react';


class CommentInput extends Component {
  constructor(){
    super();//调用父类的构造函数，这一步是必须的
    this.state = {
      username:'hyc',
      content:'from China'
    }
  }
  render() {
    let{username,content} = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名:</span>
          <div className="comment-filed-input">
            <input type="text" value={username}
              onChange = {this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>

        <div className="comment-field">
          <span className="comment-field-name">评论内容</span>
          <div className="comment-field-input">
            <textarea value={content}
              onChange = {this.handleContentChange.bind(this)}
            ></textarea>
          </div>
        </div>

        <div className="comment-field-button">
          <button
            onClick = {this.handleSubmit.bind(this)}
          >发布</button>
        </div>
      </div>
    )

  
  }
  handleUsernameChange(event) {
    console.log(event);
    this.setState({
      username:event.target.value
    })
  }
  handleContentChange(event){
    this.setState({
      username:event.target.value
    })
  }
  handleSubmit(event){
    // console.log(this.state)
    this.setState({
      content:''
    })
  }
}


export default CommentInput;