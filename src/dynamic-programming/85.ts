// 85. Maximal Rectangle
// Hard
// 8.1K
// 129
// Companies
// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

// Example 1:


// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.
// Example 2:

// Input: matrix = [["0"]]
// Output: 0
// Example 3:

// Input: matrix = [["1"]]
// Output: 1
 

// Constraints:

// rows == matrix.length
// cols == matrix[i].length
// 1 <= row, cols <= 200
// matrix[i][j] is '0' or '1'.
// Accepted
// 330.8K
// Submissions
// 745.3K
// Acceptance Rate
// 44.4%


function maximalRectangle(matrix: string[][]): number {
    let rs = 0;
    const n = matrix.length;
    const m = matrix[0].length;
    const height = Array(m).fill(0), left = Array(m).fill(0), right = Array(m).fill(m);
    for (let i = 0; i < n; i++) {
        let curLeft = 0, curRight = m;
        // calc height
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === '1') {
                height[j] = height[j] + 1;
            } else {
                height[j] = 0;
            }
        }

        // calc left
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === '1') {
                left[j] = Math.max(curLeft, left[j]);
            } else {
                curLeft = j + 1;
                left[j] = 0;
            }
        }

        // calc right
        for (let j = m - 1; j >= 0; j--) {
            if (matrix[i][j] === '1') {
                right[j] = Math.min(curRight, right[j]);
            } else {
                curRight = j;
                right[j] = m;
            }
        }

        for (let j = 0; j < m; j++) {
            rs = Math.max(rs, height[j] * (right[j] - left[j]));
        }

        console.log('left', left);
        console.log('right', right);
        console.log('height', height);
        
    }

    return rs;
};

console.log('maximalRectangle', maximalRectangle([["0","1"]]));
