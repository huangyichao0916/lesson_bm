const quickSort: Function = (unsortedArray: number[]): number[] => {
    if (unsortedArray.length <= 1) {
    // if (unsortedArray.length === 1) {
        return unsortedArray;
    }
    const middleArr: number[] = [unsortedArray.shift()];
    const leftArr: number[] = [];
    const rightArr: number[] = [];
    for (let i = 0; i < unsortedArray.length; i++) {
        const ele = unsortedArray[i];
        if (ele < middleArr[0]) {
            leftArr.push(ele)
        } else if (ele === middleArr[0]) {
            middleArr.push(ele)
        } else {
            rightArr.push(ele)
        }
    }
    return quickSort(leftArr).concat(middleArr,quickSort(rightArr))
}

let arr: number[] = [-1,2,2,2,2,20,2,2,33,2,2,2,2]
console.log(quickSort(arr3))