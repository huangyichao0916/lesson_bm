import {observable,action} from 'mobx';
import axios from 'axios';

const LIMIT = 10;


class ArticleStore{
    // 用observable修饰过的变量被修改了之后，页面就会重新渲染
    //@ 装饰器 ，es新语法
    //被observable装饰之后，变量就变成响应式了
    @observable 
    articles = {
        all:[],
        cars:[],
    };

    @action
    getArticle = (tag , offset=0) => {
        axios.get('/articles',{
            params:{
                tag,
                offset,
                limit:LIMIT
            }
        })
        .then(res => {
            this.articles[tag] = res.articles
        })
    }
}