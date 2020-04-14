/** 
 * @author hyc
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n
 */
 function climbStairs(n){
    if(n==1){
        return 1;
    }
    if (n==2) {
        return 2;
    }
    let ret=0,
        pre=2,
        prepre=1;
    for (let i = 3; i <= n; i++) {
        ret = pre + prepre;
        
        prepre = pre;
        pre = ret;
    }
    return ret;
 }
 console.log(climbStairs(20));