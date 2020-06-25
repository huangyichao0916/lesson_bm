import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;
// observable：可观测的，==== react state
// action： 修改你的 state 你必须 发起一个action
class ArticleStore {
  // observable state 用 observable 修饰过的变量 变量被修改了 页面就会就会重新渲染
  // es @ 装饰器
  LIMIT = LIMIT

  // react state 响应式 VM
  @observable articles = {
    all: [],
    tag1: [],
    tag2: []
  }
  @observable total = 0;
  // 繁杂的逻辑 尽量 写到 store
  // tags
  @observable tags = []   // 不需要在写 reducer
  @observable isLoading = false;

  @action
  getArticle(tag, offset = 0) {
    this.isLoading = true;
    axios.get('/articles', {
      params: {
        tag: tag === 'all' ? null : tag,
        offset,
        limit: LIMIT
      }
    })
    .then(res => {
      this.isLoading = false;
      // 修改 store
      this.articles[tag] = res.articles;
      this.total = res.articlesCount;
    })
  }
  handleTabChange = (key) => {
    // console.log(key);
    this.getArticle(key)
  }
  // {}  action 想支持函数 中间件
  @action
  getTags() {
    axios.get('/tags').then(res => {
      // 修改 state
      this.tags = res.tags
    })
  }

}

export default new ArticleStore();