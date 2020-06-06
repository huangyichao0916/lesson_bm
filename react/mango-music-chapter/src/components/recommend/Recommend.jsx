import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper';
import "swiper/css/swiper.css";
import Loading from '../../common/loading/Loading';
import {getNewAlbum} from '../../api/recommend';


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
      console.log('获取最新专辑');
    })
    setTimeout(() => {
      this.setState({
        loading:false,
      })
    }, 10000);
  }
  render() {
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
        <Loading show={this.state.loading} title="正在加载..."/>
      </div>
    )
  }
}


export default Recommend;