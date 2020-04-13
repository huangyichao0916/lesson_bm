var game = function(guess, answer) {
    let flag = 0;
    for (let i = 0; i < 3; i++) {
        if(guess[i]===answer[i]){
            flag++;
        }
    }
    return flag;
};
