/**
 * 
 * @param {string} word 
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let isCaps = (word[0]>='a'&&word[0]<='z')?false:true;
    // console.log(isCaps);
    word = word.slice(1);
    let flag;
    if (word!=='') {
        if (isCaps) {
            // console.log(word)
            flag = word.split('').every((item) => {
                return item>='a'&&item<='z';
            })
            ||
            word.split('').every((item) => {
                return item>='A'&&item<='Z';
            })
            return flag?true:false;
        }
        else{
            // console.log(word);
            flag = word.split('').some((item) => {
                return item>='A'&&item<='Z';
            })
            return flag?false:true;
        }
    }
    else{
        return true;
    }
};
console.log(detectCapitalUse('ASAD'));
