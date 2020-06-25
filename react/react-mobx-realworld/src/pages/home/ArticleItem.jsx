import React, { Component } from 'react';
import { Button} from 'antd';
class Articleitem extends Component {
  render() { 
    const {
      title, description,
      author, createdAt
    } = this.props.article
    return ( 
      <div className="articleItem">
        <div>
          <img src={author.image} alt=""/>
          {author.username}
          <Button>💗</Button>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        Read More
      </div>
    );
  }
}
 
export default Articleitem;