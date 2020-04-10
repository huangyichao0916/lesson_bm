climbStairs = function(n){
    if (n==1||n==2) {
        return n;
    }
    return climbStairs(n-1) + climbStairs(n-2);
}
console.log(climbStairs(5));


