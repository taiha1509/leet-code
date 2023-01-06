function applyOperations(nums: number[]): number[] {
    const len = nums.length;
    const rs = Array(len).fill(0);
    let rsIndex = 0;
    for(let i = 0; i < len - 1; i++) {
        if (nums[i] !== 0) {
            rs[rsIndex] = nums[i];
            if (nums[i] === nums[i+1]) {
                rs[rsIndex] = 2 * nums[i];                
            }
            rsIndex++;
        }
        if (nums[i] === nums[i+1]) {
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
            i++;
        }
    }
    if (nums[len - 1] !== 0) {
        rs[rsIndex] = nums[len - 1];
    }

    return rs;
};



console.log(applyOperations([0, 1]));