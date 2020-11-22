let arr = [1,23,512,31,535,2];
function minLen(arr,n) {
    let total = arr.reduce((pre,cur) => {
        return pre + cur;
    },0)
    if (total < n) {
        return -1;
    }
    let pointLeft = 0;
    let pointRight = arr.length - 1;
    while (pointRight - pointLeft > 0) {
        if (arr[pointLeft] > arr[pointRight]) {
            if(total - pointRight >= n){
                total -= arr[pointRight]
                pointRight --;
            }else{
                break;
            }
        }else{
            if(total - pointLeft >= n){
                total -= arr[pointLeft]
                pointLeft ++;
            }else{
                break;
            }
        }
    }
    return pointRight - pointLeft + 1;
}
console.log(minLen(arr,512))