import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'



class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []  /*数据状态 父组件 数据统一  一致性 */
    }
  }


  componentWillMount () {
    this._loadComments()
  }


  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }


  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }


  handleSubmitComment (comment) {
    // console.log(comment);
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments // old state
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }

  handleDeleteComment = (createdTime111) => {
    let {comments} = this.state;
    let i = 0
    for (; i < comments.length; i++) {
        if (comments[i].createdTime === createdTime111) {
            break;
        }
    }
    comments.splice(i,1);
    this.setState({comments});
    this._saveComments(comments);
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          handleDeleteComment={this.handleDeleteComment}
        />
      </div>
    )
  }
}


export default CommentApp;