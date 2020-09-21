function timeCompare(time1:string,time2:string):number {
    let t1:string[] = time1.split(':')
    let t2:string[] = time2.split(':')

    const len:number = Math.max(t1.length,t2.length)

    for (let i = 0; i < len; i++) {
        let num1:number = t1[i] ? parseInt(t1[i]) : 0;
        let num2:number = t2[i] ? parseInt(t2[i]) : 0;
        if (num1 > num2) {
            return 1;
        }else if (num1 < num2) {
            return -1;
        }
    }

    return 0;
}

const testArr:string[] = ['12:03:20','11:22:33','15:22:53','9:11:29']
testArr.sort(timeCompare)
console.log(testArr)