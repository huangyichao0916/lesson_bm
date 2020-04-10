climbStairs = function(n){
    let differentWays = 0;

    function solution(currentStep){
        if(currentStep + 1 ==n){
            differentWays++;
            return;
        }
        if (currentStep + 2 == n) {
            differentWays += 2;
            return;
        }
        solution(currentStep+1);
        solution(currentStep+2);
    }
    solution(0);

    return differentWays;
}
console.log(climbStairs(5));


