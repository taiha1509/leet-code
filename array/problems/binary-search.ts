function search(nums: number[], target: number): number {
    const iterate  = (start: number, end: number): number => {
        if(start >= end - 1) {
            if(nums[start] === target) return start;
            if(nums[end] === target) return end;
            return -1;
        }
        const mid = Math.floor((start+end)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) {
            return iterate(start, mid);
        }

        if(nums[mid] > target) {
            return iterate(mid, end);
        }
    }

    const index  = iterate(0, nums.length - 1);
    if(index === -1) return -1;
    return index;
};