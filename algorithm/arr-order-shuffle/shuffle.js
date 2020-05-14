function shuffle(arr) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        let ranNum = Math.floor(Math.random() * (i + 1));
        //这里有一个细节，那就是math.random要乘以i+1而不是i，因为交换的时候也有可能和自己交换，这种情况必须考虑
        [arr[i],arr[ranNum]] = [arr[ranNum],arr[i]];
    }
}

let arr = [1,2,3,4,5];
let testArray = [0,0,0,0,0];

let time = 1000;

for (let i = 0; i < time; i++) {
    let arrCopy = [...arr];
    shuffle(arrCopy);
    for (let j = 0; j < 5; j++) {
        testArray[j] += arrCopy[j];
    }
}

console.log(testArray.map(num => num / time));