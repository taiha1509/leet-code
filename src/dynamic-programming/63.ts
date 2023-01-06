// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    for(let i = 0; i < m; i++) {
        obstacleGrid[i].reverse();
    }
    obstacleGrid.reverse();
    console.log('obstacleGrid', obstacleGrid);
    
    const rs = Array(m).fill(Array(n).fill(0));
    let hasObstacleX = Boolean(obstacleGrid[0][0]), hasObstacleY = Boolean(obstacleGrid[0][0]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                if (hasObstacleY) {
                    rs[i][j] = 0;
                } else {
                    if (obstacleGrid[i][j]) {
                        rs[i][j] = 0;
                        hasObstacleY = true;
                    } else {
                        rs[i][j] = 1;
                    }
                }
            } else if (j == 0) {
                if (hasObstacleX) {
                    rs[i][j] = 0;
                } else {
                    if (obstacleGrid[i][j]) {
                        rs[i][j] = 0;
                        hasObstacleX = true;
                    } else {
                        rs[i][j] = 1;
                    }
                }
            } else // this is an obstacle point
            if (obstacleGrid[i][j]) {
                rs[i][j] = 0;
            } else {
                rs[i][j] = rs[i-1][j] + rs[i][j-1];
            }
        }
    }
    console.log('rs', rs);
    
    return rs[m-1][n-1];
};

console.log('uniquePathsWithObstacles', uniquePathsWithObstacles([[0,0],[0,1]]));
