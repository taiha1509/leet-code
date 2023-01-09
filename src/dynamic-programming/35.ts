// 35. Search Insert Position
// Easy
// 11.1K
// 518
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

function searchInsert(nums: number[], target: number): number {
    if (nums.length == 0) return 1;
    if (nums[0] > target) return 0;
    if (nums[nums.length - 1] < target) return nums.length;
    const search = (start: number, end: number): number => {
        console.log(start, end);
        if (start >= end) {
            if (nums[start] == target) return start;
            if (nums[start] > target) return start;
            return start + 1;
        }
        const mid = Math.floor((start+end) / 2);
        
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) return search(start, mid - 1);
        else return search(mid + 1, end);
    }


    return search(0, nums.length);
};

console.log(searchInsert([1,3,5,6], 7));
