var subtractProductAndSum = function(n) {
    let arr = n.toString().split('');
    let product = 1;
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        arr[i]=parseInt(arr[i]);
        sum += arr[i];
        product *= arr[i];
    }
    return product-sum;
}