  // 1. 距离
  // 2. 点 经纬度
  // 115.941546,28.544622
  // 命名规范
  const myLatitude = '28.544622',
        myLongitude = '115.941546',
        kfcLatitude = '28.549066',
        kfcLongitude = '115.950531' ;
  const shops=[
            {
              name:'肯德基莲塘店',
              price:'100',
              pos:['115.950531','28.549066'],
              img:'http://p0.meituan.net/deal/__29754840__5030372.jpg',
            },
            {
                name:'江西财经大学',
                price:'1890',
                pos:['115.823207','28.734118'],
                img:'http://p1.meituan.net/dpdeal/1a5ee0aa03f88adc664eff877aae8457125273.jpg',
            },
            {
                name:'红谷滩肯德基',
                price:'101230',
                pos:['115.855615','28.697607'],
                img:'https://p0.meituan.net/dpmerchantpic/f97edd09801a81769d81301edcce0c01222083.jpg',
            },
            {
                name:'八一广场',
                price:'1035460',
                pos:['115.909727','28.680958'],
                img:'https://p0.meituan.net/merchantpic/a30fc44b29863cad837efb4494d48630744747.jpg',
            }
          ];
  // sdk 有点大， 他在远方
  // js 事件机制
  window.onload = function() {
    // 换算函数，将距离换算成带有单位
    function parseDistance(distance) {
      if (distance < 1000) {
        return parseInt(distance)+"m"; 
      } else {
        return (distance/1000).toFixed(1)+"km";
      }
    }

    //  开始我们的js 编程
    const map = new BMap.Map(); //实例化地图
    // map.centerAndZoom("南昌县仁兴家园", 17)

    //两点距离
    const myPoint = new BMap.Point(myLongitude, myLatitude);
    const kfcPoint = new BMap.Point(kfcLongitude, kfcLatitude);
    const distance = parseDistance(
      // 925.1111
      map.getDistance(myPoint, kfcPoint)
    ); // Number
    // console.log(distance);

    //将所有店铺的距离算出来并存放在一个数组中
    let distan=[];
    for (let i = 0; i < shops.length; i++) {
        let myPoint = new BMap.Point(myLongitude, myLatitude);
        let targetPoint = new BMap.Point(shops[i].pos[0],shops[i]["pos"][1]);
        let distance = parseDistance(
            map.getDistance(myPoint, targetPoint)
          );
        distan.push(distance);
    }
    // console.log(distan);

    let arr = [];
    let shop_list = document.querySelector(".shop-list");
    for (let i = 0; i < shops.length; i++) {
        let item = `
        <div class="poi-item-wrapper">
        <div class="poi-info-wrapper">
          <div class="image-wrapper">
            <div class="imgbox">
              <img src="${shops[i]["img"]}" alt="">
            </div>
          </div>
          <div class="poi-info">
            <div class="poi-name">${shops[i]["name"]}</div>
            <div class="price-wrapper">
              <div class="location">${distan[i]}</div>
              <div class="item-eval-info">
                <div class="stars-wrapper">
                  
                  <ul>
                    <li><span class="iconfont">&#xe647;</span></li>
                    <li><span class="iconfont">&#xe647;</span></li>
                    <li><span class="iconfont">&#xe647;</span></li>
                    <li><span class="iconfont">&#xe647;</span></li>
                    <li><span class="iconfont">&#xe647;</span></li>
                  </ul>
                </div>
                <span class="price">${shops[i]["price"]}</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
        arr.push(item);
    }
    shop_list.innerHTML=arr.join("");
    

    document.querySelector('.poi-name').innerHTML =  '肯德基';
    document.querySelector('.location').innerHTML = distance;
    document.querySelector('.imgbox img').src = 
      "https://p0.meituan.net/200.0/deal/607cffdccca7f4da09a2dddeedd31a8e49072.jpg@126_0_388_388a%7C267h_267w_2e_100Q"
  }