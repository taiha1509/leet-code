function findNumbers(nums: number[]): number {
    let rs = 0;
    nums.forEach((value, index) => {
        if(Math.floor(Math.log10(value)) % 2 === 1) {
            rs ++;
        }
    })

    return rs;
};