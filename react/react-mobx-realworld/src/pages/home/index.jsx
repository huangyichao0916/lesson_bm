import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import {Pagination} from 'antd';


// 想要哪个页面的数据 注入谁
@inject('articleStore')
//监视articleStore的变化，articleStore的数据发生了变化，页面就重新渲染
@observer
class Home extends Component {
  handlePaginationChange = (page) => {
    this.props.articleStore.getArticle('all',page - 1);
  }
  render() { 
    const {total , LIMIT} = this.props.articleStore;
    return (
      <div>
        { this.props.articleStore.articles.all.length }
        <Pagination total={total} pageSize={LIMIT} defaultCurrent={1}
        onChange={this.handlePaginationChange}
        />
      </div>
    );
  }
}
 
export default Home;