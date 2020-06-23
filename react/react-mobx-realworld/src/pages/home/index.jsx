import React, { Component } from 'react';
import { Tabs } from 'antd';
import { inject, observer } from 'mobx-react';
import { Pagination } from 'antd';
import { Layout, Row, Col,Tag } from 'antd';


const { TabPane } = Tabs;
// 想要哪个页面的数据 注入谁
@inject('articleStore')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.articleStore.getArticle('all');
    this.props.articleStore.getTags();
  }
  handlePaginationChange = (page) => {
    // 1 offset 0
    // 2 offset 1
    // 3 offset 2
    this.props.articleStore.getArticle('all', page - 1);
  }
  render() {
    const { total, LIMIT, articles,handleTabChange,tags } = this.props.articleStore
    console.log(total, LIMIT)
    return (
      <div>
        <Row>
          <Col span={19}>
            <Tabs defaultActiveKey={'all'} onChange={handleTabChange}>
              {Object.keys(articles).map((tag, i) => {
                return (
                  <TabPane key={tag} tab={tag}>
                    {
                      articles[tag].map((article, i) => {
                        return (
                          <div>
                            <h3>
                              {article.title}
                            </h3>
                            <p>
                              {article.body}
                            </p>
                          </div>
                        )
                      })
                    }
                  </TabPane>
                )
              })}
            </Tabs>
          </Col >
          <Col span={5}>
              {tags.map((tag,i) => <Tag key={i}> {tag} </Tag>)}
          </Col>
        </Row>
        <Pagination
          onChange={this.handlePaginationChange}
          total={total}
          pageSize={LIMIT}
          defaultCurrent={1} />
      </div>
    );
  }
}


export default Home;