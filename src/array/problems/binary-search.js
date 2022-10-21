function search(nums, target) {
    var iterate = function (start, end) {
        if (start >= end - 1) {
            console.log('start', start);
            console.log('end', end);
            if (nums[start] === target)
                return start;
            if (nums[end] === target)
                return end;
            return -1;
        }
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] === target)
            return mid;
        if (nums[mid] > target) {
            return iterate(start, mid);
        }
        if (nums[mid] < target) {
            return iterate(mid, end);
        }
    };
    var index = iterate(0, nums.length - 1);
    if (index === -1)
        return -1;
    return index;
}