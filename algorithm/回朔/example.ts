var permute = function(nums:number[]):number[][] {
    let myLen:number = nums.length;
    let res:number[][] = []
    function backTrack(nums:number[],path:number[] = []) {
        if (path.length === myLen) {
            res.push([...path]);
        }
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i])
            let copyNums:number[] = [...nums];
            copyNums.splice(i,1);
            backTrack(copyNums,path);
            path.pop();
        }
    }
    backTrack(nums)

    return res;
};

console.log(permute([1,2,3]))