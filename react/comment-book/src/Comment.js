import React, { Component } from 'react'


class Comment extends Component {
  constructor () {
    super()
  }


  render () {
    // console.log(this.props,"===");
    let {username,content,createdTime} = this.props.comment;
    let handleDeleteComment = this.props.handleDeleteComment;
    // let {index} = this.props;
    return (
      <div className='comment'>
        {content}
    <div className="author"><span>作者:</span>{username}</div>
        <div className="delete" onClick={handleDeleteComment.bind(null,createdTime)}>删除</div>
      </div>
    )
  }

  handleDelete (){
    // let createdTime = this.props.comment.createdTime;
    // let handleDeleteComment = this.props.handleDeleteComment;
    // handleDeleteComment(createdTime);
    // console.log(this.props);
  }
}


export default Comment