const pageOne=document.querySelector("#page-one");
const startBtn=document.querySelector("#page-one button");
const pageTwo = document.querySelector("#page-two");

startBtn.addEventListener("click",function(){
    document.body.removeChild(pageOne);
    console.log(step);
    init();
    
});

let step=1;

function init(){
    step++;
    let [normalColor,specialColor]=getColor(step);/*getColor()返回的是一个16进制的数字*/
    // Math.random()生成[0，1)的随机数
    //Math.floor()向下取整数
    let pos = Math.floor(Math.random()*step*step);
    let blockWidth=100/step;
    let arr = [];
    for (let i = 0; i < step*step; i++) {
        let item=`
        <div class="block width=${blockWidth}%">
            <div    
                onclick=${i===pos?"init":""}
                style="background-color:#${i===pos?specialColor:normalColor}">

            </div>
        </div>
        `;
        arr.push(item);
    }
    pageTwo.innerHTML=arr.join("");
    const allBlocks = document.querySelectorAll('.block');
    allBlocks[pos].addEventListener("click",init);
}

/**
 * 根据关卡等级返回相应的一般颜色和特殊颜色
 * @param {number} step 关卡
 */
function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
      m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
      getRandomColorNumber(m[0], random) +
      getRandomColorNumber(m[1], random) +
      getRandomColorNumber(m[2], random);
    return [color, specialColor];
  }
  
  function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
      return "ff";
    } else if (temp > 16) {
      return temp.toString(16);
    } else if (temp > 0) {
      return "0" + temp.toString(16);
    } else {
      return "00";
    }
  }
  // 随机颜色 min 大于16
  function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
  }
  // 随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }