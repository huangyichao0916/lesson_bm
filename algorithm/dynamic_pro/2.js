var a = "mitcmu";
var b = "itacnu";
var m = 6, n = 6;
let arr = [];
for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
        arr[i].push(0);
    }
}
// console.log(arr);
let shortestEdit = function () {
    if (a[0] === b[0]) {
        arr[0][0] = 0;
    }
    else {
        arr[0][0] = 1;
    }
    //给第一列初始化
    for (let i = 1; i < m; i++) {
        arr[i][0] = arr[i - 1][0] + 1;
    }
    //给第一行初始化
    for (let i = 1; i < n; i++) {
        arr[0][i] = arr[0][i - 1] + 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (a[i] === b[j]) {
                arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1]);
            }
            else {
                arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + 1);
            }
        }
    }
    console.log(arr);
}
shortestEdit();