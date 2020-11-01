const quickSort2: Function = (unsortedArr: number[]): number[] => {
    function helper(start: number, end: number) {
        if (end - start < 1) {
            return;
        }
        let pivot: number = unsortedArr[end];
        let point: number = start - 1;
        for (let i = start; i < end; i++) {
            if (unsortedArr[i] < pivot) {
                point++;
                [unsortedArr[point], unsortedArr[i]] = [unsortedArr[i], unsortedArr[point]];
            }
        }
        [unsortedArr[end],unsortedArr[point + 1]] = [unsortedArr[point + 1],unsortedArr[end]];
        helper(start,point)
        helper(point + 2,end)
    }
    helper(0, unsortedArr.length - 1)
    return unsortedArr;
}

const arr3:Array<number> = [1,-1,1,22,11,1,1,1,1];
console.log(quickSort2(arr3))