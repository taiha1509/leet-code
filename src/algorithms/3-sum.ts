/**
 * @param arr source array is sorted by descending
 * @param target 
 */
const bSearch = (arr: number[], target: number) => {
    const search = (from: number, to: number) => {
        const first = from, last = to, mid = Math.floor((last + first) / 2);
        if (first === mid) {
            return arr[mid] === target ? mid : null;
        }
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) return search(mid, last);
        return search(first, mid);
    }
    return search(0, arr.length);
}

const reduceArray = (arr: number[]) => {
    const tmp = new Map();
    const rs = [];
    arr.forEach((item) => {
        const count = tmp.get(item);
        if (!count) {
            tmp.set(item, 1);
            rs.push(item);
        } else {
            tmp.set(item, count + 1);
            if (count < 3) {
                rs.push(item);
            }
        }
    });
    return rs;
}

function threeSum(nums: number[]): number[][] {
    nums = reduceArray(nums);
    nums.sort((a, b) => a - b);
    const len = nums.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const tmp = nums[i] + nums[j];
            const index = bSearch(nums, -tmp);
            if (index && index !== i && index !== j) {
                map.set(`${nums[i]}-${nums[j]}-${nums[index]}`.split('-').sort().join('-'), [nums[i], nums[j], nums[index]]);
            }
        }
    }

    return Array.from(map.values());
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
