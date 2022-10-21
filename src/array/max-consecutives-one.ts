function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let rs = 0;
    nums.forEach((value, index) => {
        if(value) {
            count ++;
        } else {
            count = 0;
        }
        if(rs < count) rs= count;
    })

    return rs;
};