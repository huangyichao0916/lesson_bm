// 发红包的功能
function hongbao(total, num) {
    let arr = []; //声明数组
    let restAmount = total; // 发到最后那个人的时候， 拿剩下的钱
    let restNum = num;
    for (let i = 0; i < num - 1; i++) {    //  -1 39  ? 
      // 随机算法 公平  多一些， 少一些 
      let amount = total / num;
      arr.push(amount)
      restAmount -= amount; 
    }
    arr.push(restAmount); // 最后的钱给他， 钱数对的上
    // 1. 钱数要对的上  
    // 2. 好玩， 随机  平均数 total/num  
    //   0.125
    //   0.125 
    //   .... 
    //   抢？ 
    return arr;
  } 
  
  console.log(hongbao(5, 40));