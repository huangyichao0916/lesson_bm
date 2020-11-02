function fnc(myArr) {
    let flag = {};
    function flatAndRemoveDup(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            const ele = arr[i]
            if (!Array.isArray(ele)) {
                if (flag[ele]) {
                    continue;
                }
                flag[ele] = true;
                newArr.push(ele)
            } else {
                newArr.push(...flatAndRemoveDup(ele))
            }
        }
        return newArr;
    }
    myArr = flatAndRemoveDup(myArr)
    function sort(arr) {
        function helper(start, end) {
            if (start >= arr.length - 1 || end <= 0) {
                return;
            }
            if (end - start < 1) {
                return;
            }
            let pivot = arr[end];
            let guard = start - 1;
            for (let i = start; i < end; i++) {
                const ele = arr[i];
                if (ele < pivot) {
                    guard++;
                    [arr[guard], arr[i]] = [arr[i], arr[guard]];
                }
            }
            [arr[guard + 1], arr[end]] = [arr[end], arr[guard + 1]];
            helper(start, guard)
            helper(guard + 2, end)
        }
        helper(0, arr.length - 1)
    }
    sort(myArr)
    return myArr;
}
var arr = [[2, 1, 2], [3, 4, 5, 5], [7, 8, 6, 9, [11, 12, [12, 13, [14]]]], 10];
console.log(fnc(arr))