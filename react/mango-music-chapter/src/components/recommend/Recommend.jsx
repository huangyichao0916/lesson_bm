import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import Loading from '../../common/loading/Loading';
import Scroll from '@/common/scroll/Scroll';
import * as AlbumModel from '@/model/album';  

import { getNewAlbum }  from '../../api/recommend';
import LazyLoad, { forceCheck } from 'react-lazyload';

import Album from '@/components/album/Album';
import {Route} from 'react-router-dom'

class Recommend extends React.Component {
  constructor() {
    super()
    this.state = {
      refreshScroll: false,
      newAlbums: [], /* 数据驱动的界面 */
      loading: true,
      sliderList: [{
        id: 1,
        picUrl: 'https://mat1.gtimg.com/rain/bailing20/4333e6a9ac25.uzi.png',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }, {
        id: 2,
        picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11885314858_640330/0',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }, {
        id: 3,
        picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11884276052_640330/0',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }] // 幻灯片  没有必要去redux 
    }
  }

  componentDidUpdate() {
    //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
        this.bScroll.refresh();
    }
  }

  componentDidMount() {
    new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    })

    // 获取最新专辑 功能的封装
    // fetch  低级的
    getNewAlbum() /**promise */
      .then(res => {
        let albumList = res.albumlib.data.list;

        // model 
        // albumList.sort()
        this.setState({
          loading: false,
          newAlbums: albumList
        }, () => {
          this.setState({
            refreshScroll: true
          })
        })
      })
  }
  toAlbumDetail(url){
    console.log(url);
    this.props.history.push({
      pathname:url,
    })
  }
  render() {
    let {match} = this.props;
    let albums = this.state.newAlbums.map(item => {
      let album = AlbumModel.createAlbumByList(item);
      // console.log(album);
      return (
      <div className="album-wrapper" 
        key={album.id}
        onClick={() => this.toAlbumDetail(`${match.url}/${album.mId}`)}
      >
        <div className="left">
          <LazyLoad height={60}>
            <img src={album.img} alt={item.name} width="100%" height="100%"/>
          </LazyLoad>
        </div>
        <div className="right">
          <div className="album-name">
            {album.name}
          </div>
          <div className="singer-name">
            {album.singer}
          </div>
          <div className="public-time">
            {album.publicTime}
          </div>
        </div>
      </div>
      )
    })
    return (
      <div className="music-recommend">
       
          <div className="slider-container">
            <div className="swiper-wrapper">
              {
                this.state.sliderList.map(slider => {
                  return (
                    <div className="swiper-slide" key={slider.id}>
                      <a href={slider.linkUrl} className="slider-nav">
                        <img src={slider.picUrl} alt="" width="100%" height="100%"/>
                      </a>
                    </div>
                  );
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
        <Scroll
          refresh={this.state.refreshScroll}
          onScroll={(event) => {
            // console.log(e);
            forceCheck();
          }}>
          <div className="album-container">
            <h1 className="title">最新专辑</h1>
            <div className="album-list">
              {albums}
            </div>
          </div>
        </Scroll>
        <Loading show={this.state.loading} title="正在加载..."/>
        <Route path={`${match.url}/:id'`} component={Album} />
      </div>
    )
  }
}

export default Recommend;