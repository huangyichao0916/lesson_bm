function sort(fnc){
    const unsortedArr = this;
    function helper(start, end) {
        if (end - start < 1) {
            return;
        }
        let pivot = unsortedArr[end];
        let point = start - 1;
        for (let i = start; i < end; i++) {
            if (fnc(unsortedArr[i],pivot) < 0) {
                point++;
                [unsortedArr[point], unsortedArr[i]] = [unsortedArr[i], unsortedArr[point]];
            }
        }
        [unsortedArr[end],unsortedArr[point + 1]] = [unsortedArr[point + 1],unsortedArr[end]];
        helper(start,point)
        helper(point + 2,end)
    }
    helper(0, unsortedArr.length - 1)
}
const arr = [
    {
        id: 3,
        content: 'asdj'
    },
    {
        id: 20,
        content: 'asdjkl',
    },
    {
        id: 100,
        content: 'asdj'
    },
    {
        id: 1,
        content: 'asd'
    },
    {
        id: 3,
        content: 'asdj'
    },
]
const arr2 = [1,3,5,2,2,0]
let fnc = (obj1,obj2) => obj1.id - obj2.id;
let fnc2 = (a,b) => a - b;
sort.call(arr2,fnc2)

console.log(arr2)