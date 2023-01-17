// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.



// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109


function fourSum(nums: number[], target: number): number[][] {
    const map = new Map();
    const filteredNums = nums.sort((a, b) => a-b).filter((num) => {
        const tmp = map.get(num) || 0;
        map.set(num, tmp + 1);
        if (map.get(num) > 4) {
            return false;
        }
        return true;
    })
    const len = filteredNums.length;
    const rs = [];
    const possibleRemainer = [];
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const remainer = target - filteredNums[i] - filteredNums[j] - filteredNums[k];
                if (possibleRemainer.includes(remainer)) {
                    rs.push([remainer, filteredNums[i], filteredNums[j], filteredNums[k]].sort((a, b) => a - b));
                }
            }
        }
        possibleRemainer.push(filteredNums[i]);
    }
    console.log(rs);


    return rs.filter((value, index, self) =>
        index == self.findIndex((item) => 
            item[0] == value[0] &&
            item[1] == value[1] &&
            item[2] == value[2] &&
            item[3] == value[3]
        )
    );
};

console.log('four sum', fourSum([2, 2, 2, 2, 2], 8));
