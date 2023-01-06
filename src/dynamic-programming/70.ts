// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


function climbStairs(n: number): number {
    const rs = [1, 2];
    if (n <= 2) return rs[n-1];
    for (let i = 2; i < n; i++) {
        rs.push(rs[i-2] + rs[i-1]);
    }
    return rs[n-1];
};

const rs = climbStairs(4);
console.log(rs);