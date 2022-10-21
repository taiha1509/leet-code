const binary_search_index = function (arr, target, start, end) {
    if (start >= end - 1) {
        if (arr[start] === target)
            return start;
        if (arr[end] === target)
            return end;
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target)
        return mid;
    if (arr[mid] > target) {
        return binary_search_index(start, mid);
    }
    if (arr[mid] < target) {
        return binary_search_index(mid, end);
    }
};

function threeSum(nums) {
    const rs = new Set();
    const sorted = nums.sort((a, b) => a - b);
    const len = sorted.length;
    for(let i = 0; i < len-2; i++) {
        for(let j = i + 1; j < len - 1; j++) {
            for(let k = j+1; k < len; k ++) {
                const index = binary_search_index(sorted, 0-(nums[i] + nums[j]) , j+1, len - 1);
                if(index !== -1) {
                    rs.add([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    console.log(Array.from(rs));

    return Array.from(rs);
};

threeSum([-1,0,1,2,-1,-4]);