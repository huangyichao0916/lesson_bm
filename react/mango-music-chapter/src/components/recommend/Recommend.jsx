import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper';
import "swiper/css/swiper.css";
import Loading from '../../common/loading/Loading';
import {getNewAlbum} from '../../api/recommend';
import LazyLoad from 'react-lazyload';

class Recommend extends React.Component {
  constructor() {
    super();
    this.state = {
      newAlbums: [] ,
      loading:true,
      sliderList: [
      {
        id: 1,
        picUrl: 'https://mat1.gtimg.com/rain/bailing20/4333e6a9ac25.uzi.png',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }, 
      {
        id: 2,
        picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11885314858_640330/0',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }, 
      {
        id: 3,
        picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11884276052_640330/0',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }],
    }
  }
  componentDidMount(){
    new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    });
    getNewAlbum()
    .then(res => {
      this.setState({
        loading:false,
        newAlbums:res,
      })
    })
    setTimeout(() => {
      this.setState({
        loading:false,
      })
    }, 10000);
  }
  render() {
    let albums = this.state.newAlbums.map(item => (
      <div className="album-wrapper" key={item.id}>
        <div className="left">
          <LazyLoad height={60}>
            <img src={item.img} alt={item.name} width="100%" height="100%"/>
          </LazyLoad>
        </div>
        <div className="right">
          <div className="album-name">
            {item.name}
          </div>
          <div className="singer-name">
            {item.singer}
          </div>
          <div className="public-time">
            {item.publicTime}
          </div>
        </div>
      </div>
    ))

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
        <div className="album-container">
          <h1 className="title">最新专辑</h1>
          <div className="album-list">
            {albums}
          </div>
        </div>
        <Loading show={this.state.loading} title="正在加载..."/>
      </div>
    )
  }
}


export default Recommend;