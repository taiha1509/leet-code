// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
// Example 2:

// Input: nums = [4,4,4], k = 3
// Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.

// Constraints:

// 1 <= k <= nums.length <= 105
// 1 <= nums[i] <= 105

function maximumSubarraySum(nums: number[], k: number): number {
    let mx = 0, sum = 0;
    const len = nums.length, mp = new Map();
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
        if (i >= k - 1) {
            if (mp.size === k) {
                mx = Math.max(sum, mx);
            }
            if (mp.get(nums[i - k + 1]) === 1) {
                mp.delete(nums[i - k + 1]);
            } else {
                mp.set((nums[i - k + 1]), mp.get(nums[i - k + 1]) - 1);
            }
            sum -= nums[i - k + 1];
        }
    }
    return mx;
};


console.log('maximumSubarraySum', maximumSubarraySum([1,1,1,7,8,9], 3));
