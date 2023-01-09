// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

function generate(numRows: number): number[][] {
    const tower: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
        const pre = tower[i - 1];
        const tmp = Array(i + 1).fill(1);
        for (let j = 0; j < pre.length - 1; j++) {
            tmp[j+1] = pre[j] + pre[j+1];
        }
        tower.push(tmp);
    }

    return tower;
};

console.log(generate(5));
