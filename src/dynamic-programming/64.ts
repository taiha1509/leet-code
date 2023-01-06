// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12
 

function minPathSum(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const arr: number[][] = Array(m).fill(Array(n).fill(0));
    arr[m-1][n-1] = grid[m-1][n-1];

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i !== m-1 && j !== n-1) {
                arr[i][j] = Math.min(arr[i+1][j], arr[i][j+1]) + grid[i][j];
            } else {
                arr[i][j] = (arr?.[i+1]?.[j] || 0) + (arr?.[i]?.[j+1] || 0) + grid[i][j];
            }
            arr[i][j];
        }
    }

    return arr[0][0];
};

console.log('minPathSum', minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
