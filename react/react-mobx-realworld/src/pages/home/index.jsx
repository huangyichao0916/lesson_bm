import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';


// 想要哪个页面的数据 注入谁
@inject('articleStore')
@observer
class Home extends Component {
  render() { 
    return (
      <div>
        { this.props.articleStore.articles.all.length }
      </div>
    );
  }
}
 
export default Home;